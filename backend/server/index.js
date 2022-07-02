const express = require('express');
const tarefaController = require('../controllers/tarefaController');

const app = express(); // 1

app.get('/', tarefaController); // 2

app.listen(5006, () => {
  console.log('Aplicação ouvindo na porta 5006');
}); // 3
