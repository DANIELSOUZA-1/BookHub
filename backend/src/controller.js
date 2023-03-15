const responseModel = {
    success: false,
    data: [],
    error: []
}

const connection = require('./connection');
module.exports = {
    async create(req, res) {
        const response = {...responseModel}

        const { bookCode, title, author, publisher, releaseYear } = req.body; 
        const [, affectedRows] = await connection.query(`INSERT INTO books (bookCode, title, author, publisher, releaseYear) VALUES (${bookCode}, '${title}', '${author}', '${publisher}', ${releaseYear})`);   
    
        if (affectedRows >= 0) {
            response.success = true;
        }
        return res.json(response); 
    }, 

    async getAll(req, res) {
        const [, data] = await connection.query(`SELECT * FROM books`);   
        return res.json(data);
    },

    async getBookById(req, res) {
        const aaa = req.params;
        bookCode = aaa.bookCode;

        const [, data] = await connection.query(`SELECT * FROM books WHERE bookCode = ${bookCode}`);   
        return res.json(data);
    },

    async update(req, res) {
        const { bookCode, title, author, publisher, releaseYear } = req.body; 
        await connection.query(`UPDATE books SET title = '${title}', author = '${author}', publisher = '${publisher}', releaseYear = ${releaseYear} WHERE bookCode = ${bookCode};`);   

        return res.json('Atualizado');
    }, 

    async delete(req, res) {
        const bbb = req.params;
        bookCode = bbb.bookCode;
        await connection.query(`DELETE FROM books WHERE bookCode = ${bookCode}`);  

        return res.json('Deletado');
    }, 

    

}