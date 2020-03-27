FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3001

# RUN echo 'before sleep -------------'

# RUN sleep 30

# RUN echo 'after sleep ----------------'

CMD [ "npm", "start" ]