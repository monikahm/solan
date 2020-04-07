FROM node as frontend-stage
RUN mkdir /frontend
WORKDIR /frontend
COPY package.json /frontend/
RUN npm install
#COPY ./ /frontend/
CMD ["npm", "start"]