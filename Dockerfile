FROM node:18-alpine

COPY . .

RUN npm install -g serve

EXPOSE 3000

CMD ["npm", "start"]
