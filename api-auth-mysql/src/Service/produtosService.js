const connection = require('../Config/connection');

const produtosService = async () => {
    const [query] = await (await connection).execute('SELECT * FROM ecommerc.itens');

    return query;
}

module.exports = produtosService;