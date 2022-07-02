const { Tarefa } = require('../models');

const tarefaService = async () => {
    const getTarefa = await Tarefa.findAll();
    return getTarefa;
};

module.exports = tarefaService;