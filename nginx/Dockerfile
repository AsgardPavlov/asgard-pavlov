FROM nginx:alpine

RUN apk add --no-cache certbot certbot-nginx

RUN mkdir -p /etc/letsencrypt/live/asgardpavlov.com && \
    mkdir -p /var/www/certbot

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-http.conf /etc/nginx/nginx-http.conf
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]