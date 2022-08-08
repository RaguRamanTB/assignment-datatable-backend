require("dotenv").config();

module.exports = {
  HOST: process.env.MYSQL_URL,
  USER: process.env.MYSQL_USERNAME,
  PASSWORD: process.env.MYSQL_PASSWORD,
  DATABASE: process.env.MYSQL_DATABASE,
};