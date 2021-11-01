FROM node:16.13.0-alpine3.12 AS builder

USER node

RUN mkdir /home/node/web

WORKDIR /home/node/web

COPY --chown=node:node package.json package-lock.json /home/node/web/

ENV NODE_ENV=production

RUN npm ci

COPY --chown=node:node . /home/node/web

RUN npm run export

FROM nginx:1.21.3-alpine
COPY --from=builder /home/node/web/out /var/www
COPY nginx.conf /etc/nginx/nginx.conf

## add permissions for nginx user
RUN chown -R nginx:nginx /var/www && chmod -R 755 /var/www && \
  chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid

USER nginx

STOPSIGNAL SIGQUIT

EXPOSE 8000 8001

CMD ["nginx", "-g", "daemon off;"]