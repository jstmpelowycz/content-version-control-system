FROM --platform=linux/amd64 node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "dist/main.js"]
