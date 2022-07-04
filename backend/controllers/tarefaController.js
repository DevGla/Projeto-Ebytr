const tarefaService = require('../services/tarefaService');

const tarefaController = async (req, res) => {
    try {
    const resultsService = await tarefaService.tarefaService();
    return res.status(200).json(resultsService);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("deu ruim rota-get")
    }
}

const tarefaControllerPost = async (req, res) => {
    try {
        const { name, status } = req.body;
        const data = new Date();
        const dataCriacao = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        const resultServicePost = await tarefaService.tarefaServicePost(name, dataCriacao, status);
        return res.status(201).json(resultServicePost);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("deu ruim rota-post")
    }
}

module.exports = {
    tarefaController,
    tarefaControllerPost
};
