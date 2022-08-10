# DataTable - A simple web-based datatable

DataTable is a simple web-based datatable that supports pagination, sorting, search, and a selectable number of entries in the table. This repository is the back-end (Node.js and MySQL) for the DataTable Application.

## Installation

Clone the repository and use [Node.js](https://nodejs.org/en/download/) and package manager **npm** to install and start the DataTable server.

```bash
cd assignment-datatable-backend\
npm install
node server.js
```

The server should be up and running at [http://localhost:8080/](http://localhost:8080/).

## Database Configuration

The database used for this application is **MySQL**. There is no configuration required for the database as it is already configured and hosted in **AWS Relational Database Service (RDS)**.

## REST APIs exposed

1. GET - `/api/countries/` - Fetches the count of the countries from the database.
2. GET - `/api/countries/:limit-:offset/:sortBy-:orderBy` - Fetches the countries based on limit, offset, sorting and ordering params.

## Dependencies and other packages

1. express - Building APIs 
2. mysql2 - MySQL Database Driver
3. cors - Cross-Origin Resource Sharing
4. dotenv - Loads environment variables from .env file

## Notes

1. The versions of Node.js and npm for development are **v16.16.0** and **8.11.0** respectively. For other dependency versions, please refer _package.json_ file.
2. The **.env** file is GIT ignored in this repository, I will share it personally if required.
