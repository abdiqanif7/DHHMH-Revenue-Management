FROM node:20-alpine
WORKDIR /app
COPY . .
ENV HOST=0.0.0.0
EXPOSE 3037
CMD ["node","server.js"]
