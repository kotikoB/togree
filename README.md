# Togree Assignment

## Intall

- Install docker on your machine

## Run

- Pull docker image by running the following command in your terminal
  `docker pull`
- Open postman or any REST client
- Import the included postman file
- Start testing. That's all Enjoy! :wink:

## Reason for using docker container

1. So that the development and environments can be ported from one machine to another without any configurations eg database.
2. So that development, staging and production environments can be identical, eliminating the issue where code runs on one machine but does not run in another machine.

### Alternative (If you do not want to install docker)

- Install postgres SQL in your machine and create a database named togree
- Run `git pull` to get source code locally
- Create .env file in the root directory
- Copy contents of .env.example to .env

### Open your terminal and navigate to this project and run the following commands

- Run `npm i` to install all dependencies
- Run `npm run migrate` to create database tables
- Run 'npm run seed` to populate tables with data
- Run `npm run dev` to run project in development
