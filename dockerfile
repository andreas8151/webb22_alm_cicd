# Use the official Node.js Alpine base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the environment variable for the port
ENV PORT=8080

# Expose the port the application will listen on
EXPOSE 8080

# Start the application
CMD ["node", "app.js"]