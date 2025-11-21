# Dockerfile
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies 
COPY package*.json ./
RUN npm install --only=production

# Copy app source
COPY app.js .

# Expose port 
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]