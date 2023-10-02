FROM node:slim

MAINTAINER The Wizard

WORKDIR /app

COPY package.json .

RUN npm i --omit=dev

COPY . .

CMD ["sh", "-c", "node server"]

EXPOSE 8000
