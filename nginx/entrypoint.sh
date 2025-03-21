#!/bin/sh

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
    cp /etc/nginx/nginx-http.conf /etc/nginx/nginx.conf
    exec nginx -g 'daemon off;'
fi