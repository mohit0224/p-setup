FROM node:20-alpine AS build
WORKDIR /home/app/
COPY package.json package.json
RUN npm i
COPY . .

FROM node:20-alpine AS runner
WORKDIR /home/app/
COPY --from=build /home/app/ .
EXPOSE 8000

ENTRYPOINT [ "npm","run","dev" ]


