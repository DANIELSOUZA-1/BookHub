const router = require('express').Router();
const useController = require('./controller');

// incluir livro
router.post('/create', useController.create);

// todos os livros
router.get('/bookhub', useController.getAll);

// pegar livro por código
router.get('/bookhub/:bookCode', useController.getBookById);

// atualizar dados do livro
router.post('/bookhub/update/:bookCode', useController.update); 

// deletar dados do livro
router.delete('/bookhub/delete/:bookCode', useController.delete);


module.exports = router;