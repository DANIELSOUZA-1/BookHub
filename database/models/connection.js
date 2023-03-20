const sequelize = require('sequelize')

// Config
// MariaDB CMD SQL CLIENT 
// CREATE USER 'user'@localhost IDENTIFIED BY '1234';
// GRANT ALL PRIVILEGES ON *.* TO 'user'@localhost IDENTIFIED BY '1234';
// CREATE DATABASE BOOKHUB;
// Use BOOKHUB;

const databaseName = 'BOOKHUB'
const user = 'user'
const password = '1234'
const host = 'localhost'
const dialect = 'mariadb'

const database = new sequelize(databaseName, user, password, {
	host,
	dialect
})

database.authenticate().then(() => {
	console.log('Conectado')
}).catch(error => {
	console.log('Erro ao conectar', error)
})

module.exports = {
  database: database,
  sequelize: sequelize
}
