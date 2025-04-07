FROM nginx:alpine

# Create working directories
WORKDIR /app

# Copy frontend files directly to nginx directory
COPY dist /usr/share/nginx/html

# Expose the application port
EXPOSE 80
