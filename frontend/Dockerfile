FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

RUN bun add -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
