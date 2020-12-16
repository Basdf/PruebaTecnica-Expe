FROM node:15.4.0-buster

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "start"]