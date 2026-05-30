FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY offer.html /usr/share/nginx/html/offer.html
COPY privacy.html /usr/share/nginx/html/privacy.html
COPY terms.html /usr/share/nginx/html/terms.html
COPY offer.pdf /usr/share/nginx/html/offer.pdf

EXPOSE 80
