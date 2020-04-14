FROM node:lts-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
RUN npm install

COPY ./ /usr/src/app

ENV CI true
ENV BROWSER none
ENV NODE_ENV production
ENV PORT 80

EXPOSE 80
CMD ["npm", "start"]
