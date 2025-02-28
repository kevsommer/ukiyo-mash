FROM node:alpine

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
