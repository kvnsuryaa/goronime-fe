FROM node:20-alpine3.18 AS build-stage

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

EXPOSE 8000
CMD ["npm", "run", "preview"]



