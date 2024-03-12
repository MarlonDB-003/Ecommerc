const produtosService = require('../Service/produtosService');

const produtoController =  async (req, res) => {
    try{
      const query = await produtosService();
      return res.status(200).json(query);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  
  };

  module.exports = produtoController;