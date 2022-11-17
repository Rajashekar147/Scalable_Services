FROM node:8-alpine

LABEL version="1.0.0"
ARG basedir="frontend"
ENV NODE_ENV production
WORKDIR ${basedir}/ .

COPY ${basedir}/package*.json ./

# Install npm packages
RUN npm install --silent


COPY ${basedir}/ .

RUN apk update && apk add bash

EXPOSE 9000
CMD npm start
