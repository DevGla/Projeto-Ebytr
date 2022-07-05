const { Tarefa } = require('../models');

const tarefaService = async () => {
    const getTarefa = await Tarefa.findAll();
    return getTarefa;
};

const tarefaServicePost = async (name, dataCriacao, status) => {
    const postTarefa = await Tarefa.create({ name, dataCriacao, status });
    return postTarefa;
}

const tarefaServiceDelete = async (id) => {
    console.log(id);
    const deleteTarefa = await Tarefa.destroy({
        where: { id: id },
      })
    return deleteTarefa;
}

module.exports = {
    tarefaService,
    tarefaServicePost,
    tarefaServiceDelete
};