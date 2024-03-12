const connection = require('../Config/connection');

const produtosIdService = async (id) => {
    const [query] = await (await connection).execute('SELECT * FROM ecommerc.itens WHERE id = ?', [id]);

    return query;
}

module.exports = produtosIdService;
