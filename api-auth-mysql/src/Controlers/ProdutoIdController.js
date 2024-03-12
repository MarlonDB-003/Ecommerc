const produtosIdService = require('../Service/produtosIdService');

const produtoIdController =  async (req, res) => {
  try {
    const id = req.params.id;
    const query = await produtosIdService(id);

    if (!query.length) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(query);

  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

module.exports = produtoIdController;