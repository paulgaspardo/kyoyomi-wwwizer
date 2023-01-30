FROM node:16-slim
COPY package.json package-lock.json ./
RUN npm install
COPY main.js .
CMD ["node", "main.js"]