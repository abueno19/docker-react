FROM node:18.12.1
USER node
WORKDIR /home/node/
COPY  package.json .
COPY package-lock.json .
USER root
RUN npm install
WORKDIR /home/node/app
CMD ["npm", "run","debug"]






