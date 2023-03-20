const connection = require('./connection')
const Book = require('./book')

const Bookhub = connection.database.define('BOOKHUB',{
	nome: {
		type: connection.sequelize.STRING
	},
	descricao: {
		type: connection.sequelize.TEXT
	}
})

Book.belongsTo(Bookhub)
Bookhub.hasMany(Book)
