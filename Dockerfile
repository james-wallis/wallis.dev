FROM node:8
RUN apt-get update
WORKDIR /
RUN mkdir /app
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]