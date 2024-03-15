#base image for your Docker container
FROM node:20-alpine

#make app folder inside container
WORKDIR /app

#copy package.json to app folder
COPY package.json .

#This command will install all the dependencies listed in your package.json 
#file into the container's /app/node_modules directory
RUN npm i

#copies all files and directories from your local context (.)
#into the container's working directory (/app)
COPY . .

#execute command when container starts
CMD ["npm", "run", "dev"]
