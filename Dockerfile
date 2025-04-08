FROM nginx:alpine

# Copy frontend files directly to nginx directory
COPY dist /usr/share/nginx/html

# Expose the application port
EXPOSE 80
