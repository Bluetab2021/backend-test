FROM node:14

WORKDIR /usr/app

COPY package*.json .

RUN npm install --only=prod

COPY build .

EXPOSE 3000

CMD ["npm", "run", "docker:start:node"]
