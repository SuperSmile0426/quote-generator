# Base on offical Node.js Alpine image
FROM public.ecr.aws/docker/library/node:16.20.2
# Set working directory
WORKDIR /usr/app
# Install PM2 globally
RUN npm install --global pm2
# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./
# Install dependencies
RUN npm install --legacy-peer-deps
# Copy all files
COPY ./ ./
# Build app
#  RUN npm run build
# Expose the listening port
EXPOSE 5000
# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node
# Run npm start script when container starts
CMD [ "npm", "start" ]