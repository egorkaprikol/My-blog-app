FROM node:18

WORKDIR /usr/src/app/backend

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]