const tarefaService = require('../services/tarefaService');

const tarefaController = async (req, res) => {
    try {
    const resultsService = await tarefaService();
    return res.status(200).json(resultsService);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("deu ruim")
    }
}

module.exports = tarefaController;
