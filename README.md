# Rent a Guide

This is a WebApp made for the Extension Engine summercamp.
Users can sign up and order tour guides in locations the fictional App company provides its services for

## Prerequisites
```
1. Node.js (npm)
2. Sequelize-cli (npm install -g sequelize-cli)
3. Postgres
```
## Installation

To install the app, open a Terminal and clone into it using the git clone command. After that cd into the App directory and run npm install. Cd into the clientapp directory and again run npm install.
Go back to the root app directory. Here you will find a config folder with a `config.json` file in it. Here under the development settings, enter your postgres credentials (user and password), and using the sequelize cli run 
the following commands in order

```
1. sequelize db:create
2. sequelize db:migrate
3. sequelize db:seed:all
```

To get access to the admin account, go to the App root and run the following command while the server is running

```
node initAdmin.js
```

## Starting the App

To start the Application, open up two Terminal windows. Navigate to the apps root folder in both Terminals. In the first Terminal run the command `npm start`
In the second terminal navigate futher to clientapp directory and run the command `npm run serve`

## Usage

Open a up browser and type in localhost:8080 or alternatively to a different port that will be shown in the Terminal running the clientapp.

If you ran the admin command you can log in to the admin account using the following login credentials

```
Email: admin@admin.net
password: admin
```
Or, you can alternatively register using the registration form and use a normal client account