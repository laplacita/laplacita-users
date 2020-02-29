FROM node:lts-alpine
WORKDIR /users
ADD ./package.json ./package.json
RUN npm install
ADD ./ ./
CMD ["npm", "start"]