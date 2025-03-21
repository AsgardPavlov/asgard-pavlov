#!/bin/sh

# Create required directories
mkdir -p /var/www/certbot
mkdir -p /etc/letsencrypt/live/asgardpavlov.com

# Create SSL config files if they don't exist
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > /etc/letsencrypt/options-ssl-nginx.conf
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > /etc/letsencrypt/ssl-dhparams.pem

# Check if the certificate already exists
if [ -f /etc/letsencrypt/live/asgardpavlov.com/fullchain.pem ] && [ -f /etc/letsencrypt/live/asgardpavlov.com/privkey.pem ]; then
    echo "SSL certificates found, starting Nginx with HTTPS..."
    # Use the standard nginx.conf that includes SSL
    exec nginx -g 'daemon off;'
else
    echo "SSL certificates not found, using HTTP-only configuration..."
    # Use an HTTP-only configuration that doesn't require certificates
    echo "Copying HTTP-only configuration to nginx.conf"
    cp /etc/nginx/nginx-http.conf /etc/nginx/nginx.conf

    # Check if the copy succeeded
    if [ $? -eq 0 ]; then
        echo "HTTP-only configuration activated successfully"
    else
        echo "Warning: Failed to copy HTTP configuration. Checking files:"
        ls -la /etc/nginx/
    fi

    # Start Nginx with the modified configuration
    exec nginx -g 'daemon off;'
fi