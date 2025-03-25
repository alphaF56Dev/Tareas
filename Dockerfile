FROM node:16.20.2

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

CMD [ "npm", "run", "dev" ]