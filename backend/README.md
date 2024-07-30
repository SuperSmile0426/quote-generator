# Backend

## Node Version
Install node ^16.20.2

## Config
Create a `.env` file in the root directory and add the following environment variables:

 ```sh
  PORT=5000
 ```

## Run Backend

  1. Run Locally
   - npm insteall
   - npm start

  2. Run with Docker
   - docker build quote-generator .
   - docker run -p :5000 quote-generator

  3. Using Docker Compose
   - docker-compose up --build -d
