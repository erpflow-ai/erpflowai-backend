FROM node:20-alpine as base

WORKDIR /app
COPY package.json package.json
RUN npm install && npm install -g typescript
COPY . .
CMD ["npm","run","start"]