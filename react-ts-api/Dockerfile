FROM node:14.13.1-stretch-slim
WORKDIR /usr/app
COPY . .
RUN mkdir /usr/app/node_modules -p

RUN yarn
#EXPOSE 3001
CMD yarn start