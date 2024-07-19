FROM node:latest

WORKDIR /app

RUN npm install
RUN npm run dev

EXPOSE 3000