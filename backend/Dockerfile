FROM node:18

WORKDIR /usr/src/app/backend

# Копируем package.json и package-lock.json
COPY package*.json ./
COPY package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем оставшиеся файлы приложения
COPY . .

# Указываем порт, который будет слушать наше приложение
EXPOSE 3001

CMD ["npm", "start"]