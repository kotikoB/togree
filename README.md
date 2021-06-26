# Togree Assignment

## Installation Instructions

### Install postgres SQL in your machine and create a database named togree

### Run the following commands

- Run `git pull` to get source code locally
- Create .env file in the root directory
- Copy contents of .env.example to .env
- Uncomment line 6 in the .env file and comment line 7, it should look like this:</br>
  `6 DB_HOST = backend.db`</br>
  `7 # DB_HOST = localhost`

### Open your terminal and navigate to this project and run the following commands

- Run `npm i` to install all dependencies
- Run `npm run migrate` to create database tables
- Run 'npm run seed` to populate tables with data
- Run `npm run dev` to run project in development
- Import postman collection from `https://www.getpostman.com/collections/672f91237b7ff592a335`
- Test away! :wink:
