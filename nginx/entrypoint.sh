#!/bin/sh

# Create SSL config files if they don't exist
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > /etc/letsencrypt/options-ssl-nginx.conf
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > /etc/letsencrypt/ssl-dhparams.pem

# Remove existing nginx.conf
rm -f /etc/nginx/nginx.conf

# Check if the certificate already exists
if [ -f /etc/letsencrypt/live/asgardpavlov.com/fullchain.pem ] && [ -f /etc/letsencrypt/live/asgardpavlov.com/privkey.pem ]; then
    echo "SSL certificates found, copying HTTPS configuration..."
    cp /etc/nginx/nginx-https.conf /etc/nginx/nginx.conf
else
    echo "SSL certificates not found, using HTTP-only configuration..."
    cp /etc/nginx/nginx-http.conf /etc/nginx/nginx.conf
fi

# Start Nginx
exec nginx -g 'daemon off;'