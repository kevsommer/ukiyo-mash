FROM node:alpine

# set working directory
WORKDIR /app

# copy package.json and yarn.lock
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# add the container's node_modules folder to docker's $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache dependencies
RUN yarn

# start the container
CMD ["yarn", "start"]