FROM node:14

WORKDIR /usr/app

COPY package*.json ./
COPY ./src/ ./

RUN npm install --only=prod

EXPOSE 3000

CMD ["node", "index.js"]
