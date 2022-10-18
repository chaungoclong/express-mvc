require('dotenv').config();

module.exports = {
    dialect: process.env.DB_CONNECTION || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    define: {
        underscored: true
    }
}