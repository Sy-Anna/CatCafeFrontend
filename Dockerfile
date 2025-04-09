FROM node:lts-alpine

WORKDIR /app

COPY [ "package.json", "package-lock.json", "./" ]
RUN npm ci --no-audit

COPY dist dist
COPY vite.config.ts vite.config.ts

ENTRYPOINT [ "npm", "run", "preview", "--", "--host", "--mode", "docker" ]