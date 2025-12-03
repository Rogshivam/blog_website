FROM node:18
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm" , "run", "dev"]    