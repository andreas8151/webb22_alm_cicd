FROM node:alpine
# Use the Node.js Alpine base image

WORKDIR /app
# Set the working directory inside the container to /app

COPY package*.json ./
# Copy package.json and package-lock.json (if exists) to the working directory

RUN npm install
# Run npm install to install dependencies based on package.json

COPY . .
# Copy the rest of the application code to the working directory

ENV PORT=8080
# Set the environment variable PORT to 8080

EXPOSE 8080
# Expose port 8080 to allow incoming connections

CMD ["node", "app.js"]
# Define the command to run when the container starts, executing app.js with Node.js