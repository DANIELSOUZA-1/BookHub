const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const connection = require('./models/connection')
const { Op } = require("sequelize");

const Book = require('./models/book');


connection.database.authenticate().then(() => {
	console.log("Conectado!!")
}).catch((error) => {
	console.log(error)
})

connection.database.sync({ alter: true })
// baixar mariadb, criar tabela bellpepper e usuario (Ou não)


app.use(cors({
	origin: '*'
}));

app.use(bodyParser.urlencoded())

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());


app.post('/book', (req, res) => {
	book = Book.create({
		title:  req.body.title,
        bookCode: req.body.bookCode,
        author: req.body.author,
        publisher: req.body.publisher,
        releaseYear: req.body.releaseYear
		
	}).then(() => {
		console.log('`Livro inserido')
		res.send('200')

	}).catch((error) => {
		console.log(error)
	})

})


app.get('/book', (req, res) => {

	console.log(req.query)
	var title = req.query.title;

	
	Book.findAll(
		{
			where: {
				title: {
					[Op.like]: `%${title}%`
				}
			}
		}

	).then((books) => {
		res.send(books);

	}).catch(function (erro) {
		console.log("Erro na consulta: " + erro)
		res.send("Ocorreu algum problema na consulta");
	})


});

app.patch('/book', async (req, res) => {
	console.log(req.body)
	const book = await Book.update(
	{
		title: req.body.title,
		bookCode: req.body.bookCode,
		author: req.body.author,
		publisher: req.body.publisher,
		releaseYear: req.body.releaseYear
	}, 
	{
		where: {id: req.body.id}

	}).then(() => {
		console.log('Livro atualizado')

	}).catch((error) => {
		console.log(error)
	})
	
})

app.delete('/book', async (req, res) => {
	id = req.query.id

	await Book.destroy({
		where: {
			id: id
		}

	}).then(() => {
		res.send('Livro excluido')
	})

})



app.listen(port, () => {
	console.log(`Esta aplicação está escutando a
	porta ${port}`)
});
