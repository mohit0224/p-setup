FROM node:20-alpine AS build
WORKDIR /home/app/
COPY package.json package.json
RUN npm i
RUN npm i -D pm2
COPY . .

FROM node:20-alpine AS runner
WORKDIR /home/app/
COPY --from=build /home/app/ .
EXPOSE 8080

ENTRYPOINT [ "npm", "run", "start:prod" ]

