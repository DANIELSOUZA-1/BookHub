const connection = require('./connection')

const Book = connection.database.define('books', {
	id: {
		type: connection.sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: connection.sequelize.STRING
	},
	bookCode: {
		type: connection.sequelize.STRING
	},
	author: {
		type: connection.sequelize.STRING
	},
	publisher: {
		type: connection.sequelize.STRING
	},
	releaseYear: {
		type: connection.sequelize.STRING
	},

})

module.exports = Book
