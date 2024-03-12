const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const authenticateToken = require('./Middleware/middleware');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.Router());
app.use(cors());


const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}.`);
});

app.get('/produtos', require('./Controlers/ProdutoController'));

app.get('/produtos/:id', require('./Controlers/ProdutoIdController'));

app.post('/cadastrar', require('./Controlers/UsuarioController'));

app.post('/logar', require('./Controlers/LoginController'));


