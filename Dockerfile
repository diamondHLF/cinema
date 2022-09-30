FROM node:16.16.0-alpine

RUN npm i --location=global  --force yarn

WORKDIR /cinema

COPY . .

CMD ["yarn","serve"]
