#!/bin/bash

# Exit on any error
set -e

# Write environment file if provided
if [ ! -z "${ENV_FILE}" ]; then
    echo "${ENV_FILE}" > .env
fi

# Login to Docker Hub
echo "${DOCKERHUB_TOKEN}" | docker login -u "${DOCKERHUB_USERNAME}" --password-stdin

# Pull latest images and deploy
docker compose pull
docker compose up -d --remove-orphans

# Clean up old images
docker system prune -af --volumes

echo "Deployment completed successfully at $(date)"