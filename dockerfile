FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY index.html /var/www/html/
