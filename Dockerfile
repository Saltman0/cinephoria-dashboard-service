# 1) Use official Deno image
FROM denoland/deno:alpine-2.5.6

# 2) Set working directory inside the container
WORKDIR /app

# 3) Copy over only the files you need (e.g., code, deps, config)
COPY . .

# 4) Cache dependencies
RUN deno cache src/server.ts

# 5) Expose the port (adjust if different in your app)
EXPOSE 3006

# 6) Define the runtime command
CMD ["deno", "run", "prod"]