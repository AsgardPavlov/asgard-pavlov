## Use the base image
#FROM node:18-alpine
#
## Install dependencies
#RUN apk add --no-cache g++ make py3-pip libc6-compat
#
## Create the /app directory
#RUN mkdir /app
#
## Set the working directory to /app
#WORKDIR /app
#
## Copy package.json and package-lock.json to the working directory
#COPY package*.json ./
#
## Install dependencies
#RUN npm ci
#
## Copy the rest of the application code
#COPY . .
#
## Build the application
#RUN npm run build
#
## Create a non-root user and group
#RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
#
## Switch to the non-root user
#USER nextjs
#
## Expose the port the app runs on
#EXPOSE 3000
#
## Start the application
#CMD ["npm", "start"]

FROM node:20-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm ci

# Development image
FROM base AS development
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Start development server
CMD ["npm", "run", "dev"]

# Builder image
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

## Set build-time variables
#ARG NEXT_PUBLIC_API_URL
#
#ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build application
RUN npm run build

# Production image
FROM base AS production
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000

# Copy built application
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Start production server
CMD ["node", "server.js"]