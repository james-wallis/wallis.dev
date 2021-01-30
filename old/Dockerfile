FROM node:12
RUN apt-get update
RUN apt-get install -y automake autoconf libtool dpkg nasm libpng-dev
WORKDIR /
RUN mkdir /app
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
