FROM node:alpine
WORKDIR /app
COPY ./package.json ./

RUN yarn install --frozen-lockfile
RUN npm i  typescript g

COPY . .
CMD ["yarn", "start"]