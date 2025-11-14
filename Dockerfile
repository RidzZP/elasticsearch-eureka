# Use the latest official Node.js LTS image
FROM node:lts-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files (will be created during npm init)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose port
EXPOSE 3002

# Start the application
CMD ["npm", "start"]
