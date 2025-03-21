#!/bin/sh

# Create SSL config files if they don't exist
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > /etc/letsencrypt/options-ssl-nginx.conf
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > /etc/letsencrypt/ssl-dhparams.pem

# Check if the certificate already exists
if [ ! -f /etc/letsencrypt/live/asgardpavlov.com/fullchain.pem ]; then
    # Start nginx temporarily for certbot validation
    nginx -g 'daemon off;' &
    NGINX_PID=$!

    # Wait for nginx to start
    sleep 5

    # Stop nginx after certbot is done
    certbot certonly --webroot \
        -w /var/www/certbot \
        -d asgardpavlov.com -d www.asgardpavlov.com \
        --email asgardpavlov@gmail.com \
        --agree-tos \
        --non-interactive \
        --rsa-key-size 4096

    kill $NGINX_PID
fi

# Start Nginx
exec nginx -g 'daemon off;'