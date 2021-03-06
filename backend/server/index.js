const express = require('express');
const tarefaController = require('../controllers/tarefaController');
const cors = require('cors');

const app = express(); // 1
app.use(cors())
app.use(express.json());

app.get('/', tarefaController.tarefaController); // 2
app.post('/', tarefaController.tarefaControllerPost); // 2
app.delete('/:id', tarefaController.tarefaControllerDelete); // 2

app.listen(5006, () => {
  console.log('Aplicação ouvindo na porta 5006');
}); // 3

module.exports = app