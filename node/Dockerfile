FROM node:8.11.1-alpine

ENV NODE_ENV=development

RUN npm install -g express-generator && \
    npm install -g pm2

WORKDIR /usr/src/node-tutorial

EXPOSE 3000
CMD ["pm2-dev", "pm2.json"]
