#!/bin/sh

# Create required directories
mkdir -p /var/www/certbot
mkdir -p /etc/letsencrypt/live/asgardpavlov.com

# Create SSL config files if they don't exist
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > /etc/letsencrypt/options-ssl-nginx.conf
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > /etc/letsencrypt/ssl-dhparams.pem

# Create a temporary basic Nginx config that only serves HTTP
cat > /tmp/nginx-http-only.conf <<EOF
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name asgardpavlov.com www.asgardpavlov.com;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        location / {
            return 200 "Temporary server for SSL validation";
        }
    }
}
EOF

# Check if the certificate already exists
if [ ! -f /etc/letsencrypt/live/asgardpavlov.com/fullchain.pem ]; then
    echo "No certificates found, attempting to obtain them..."

    # Start nginx with basic config for certbot validation
    nginx -c /tmp/nginx-http-only.conf -g 'daemon on;'

    # Wait for nginx to start
    sleep 5

    # Attempt to get certificates
    certbot certonly --webroot \
        -w /var/www/certbot \
        -d asgardpavlov.com -d www.asgardpavlov.com \
        --email asgardpavlov@gmail.com \
        --agree-tos \
        --non-interactive \
        --rsa-key-size 4096

    # Stop the temporary Nginx
    nginx -s stop

    # Wait for nginx to stop
    sleep 2

    echo "Certificate process completed, checking..."

    # Check if the operation succeeded
    if [ ! -f /etc/letsencrypt/live/asgardpavlov.com/fullchain.pem ]; then
        echo "Certificate acquisition failed. Starting with HTTP only..."
        # We'll use a modified config that doesn't require SSL
        cat > /tmp/nginx-fallback.conf <<EOF
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging setup
    log_format main '\$remote_addr - \$remote_user [\$time_local] "\$request" '
                    '\$status \$body_bytes_sent "\$http_referer" '
                    '"\$http_user_agent" "\$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;

    # HTTP server block
    server {
        listen 80;
        server_name asgardpavlov.com www.asgardpavlov.com;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        # Frontend proxy
        location / {
            proxy_pass http://asgard-pavlov-web:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
        }
    }
}
EOF
        exec nginx -c /tmp/nginx-fallback.conf -g 'daemon off;'
    fi
fi

# Start Nginx with the full configuration
echo "Starting Nginx with full configuration..."
exec nginx -g 'daemon off;'