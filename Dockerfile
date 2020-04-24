FROM node:latest

ARG DB_PW
ARG DB_USER
ARG DB_DB

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3001

ENV DB_PW="${DB_PW}"
ENV DB_USER="${DB_USER}"
ENV DB_DB="${DB_DB}"

CMD [ "npm", "start" ]