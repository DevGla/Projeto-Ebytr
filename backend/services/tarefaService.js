const { Tarefa } = require('../models');

const tarefaService = async () => {
    const getTarefa = await Tarefa.findAll();
    return getTarefa;
};

const tarefaServicePost = async (name, dataCriacao, status) => {
    console.log(dataCriacao);
    const postTarefa = await Tarefa.create({ name, dataCriacao, status });
    return postTarefa;
}

module.exports = {
    tarefaService,
    tarefaServicePost
};