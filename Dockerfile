# Dockerfile

# base image
FROM arm64v8/node:alpine

# create & set working directory
RUN mkdir -p /thaddev.com
WORKDIR /thaddev.com

ARG GITHUB_ACCESS_TOKEN
# copy source files
COPY . /thaddev.com
# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]