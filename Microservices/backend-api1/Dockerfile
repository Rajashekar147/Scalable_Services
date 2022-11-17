FROM node:8-alpine

LABEL version="1.0.0" 

COPY ./package*.json ./

RUN npm install --silent
COPY ./ .

RUN apk update && apk add bash

EXPOSE 9010
CMD npm start
