<h1>Comandos nodes utilizados no desafio</h1>
<h2>BackEnd</h2>
<p>O projeto foi iniciado com o seguinte comando: </p>
<p>npm init -y</p>
<p>Após isso, instalei as seguintes bibliotecas: 
<p>mysql2, express, nodemon, bcryptjs, jsonwebtoken, express-validator e cors. </p>
<p>Todas foram instaladas pelo comando npm install</p></br>
<h2>FrontEnd</h2>
<p>Npx create-react-app my-app</p>
<p>As seguintes bibliotecas foram baixadas: </p>
<p>Axios, js-cookie, react-dom, react-icons, react-router-dom, react-scripts, react-toastify e web-vitals. </p></br>
<h1>Criação do banco de dados da aplicação</h1>
CREATE TABLE itens (</br>
    id INT AUTO_INCREMENT PRIMARY KEY,</br>
    nome VARCHAR(255) NOT NULL,</br>
    descricao TEXT,</br>
    valor DECIMAL(10, 2) NOT NULL,</br>
    imagem_url VARCHAR(255</br>
);</br>

<h1>Criação da tabela de Clientes</h1>
CREATE TABLE clientes (</br>
    id INT AUTO_INCREMENT,</br>
    nome VARCHAR(100),</br>
    cpf VARCHAR(14) UNIQUE,</br>
    email VARCHAR(100) UNIQUE,</br>
    telefone VARCHAR(15),</br>
    senha VARCHAR(255),</br>
    cep VARCHAR(9),</br>
    logradouro VARCHAR(100),</br>
    numero VARCHAR(10),</br>
    complemento VARCHAR(100),</br>
    bairro VARCHAR(100),</br>
    cidade VARCHAR(100),</br>
    estado CHAR(2),</br>
    PRIMARY KEY (id)</br>
);</br>

<h1>Dados do cadastro de produtos</h1>
INSERT INTO itens (nome, descricao, valor, imagem_url) VALUES</br>
('Celular Smartphone', 'Smartphone de última geração com tela de alta resolução e câmera de 64MP.', 899.99, 'https://m.media-amazon.com/images/I/41VzK4OiT7L._AC_SX679_.jpg'),</br>
('Notebook Ultrafino', 'Notebook leve e potente, ideal para trabalho e entretenimento.', 999.99, 'https://m.media-amazon.com/images/I/71C9z5vNDhL._AC_SX569_.jpg'),</br>
('Fone de Ouvido Bluetooth', 'Fone de ouvido sem fio com cancelamento de ruído ativo e bateria de longa duração.', 149.99, 'https://m.media-amazon.com/images/I/61qif4R55hL._AC_SX679_.jpg'),</br>
('Smartwatch Fitness', 'Smartwatch com monitoramento de atividades físicas, frequência cardíaca e GPS integrado.', 199.99, 'https://m.media-amazon.com/images/I/51IxCp-f3tL._AC_SX679_.jpg'),</br>
('Câmera DSLR Profissional', 'Câmera DSLR de alta qualidade com sensor de 24MP e capacidade de gravação em 4K.', 799.99, 'https://m.media-amazon.com/images/I/81pz06ySqrL._AC_SX425_.jpg'),</br>
('Console de Videogame', 'Console de videogame de última geração com suporte a jogos em alta definição e streaming.', 499.99, 'https://m.media-amazon.com/images/I/51bAFZ7d01L._AC_SX679_.jpg'),</br>
('Tablet Android', 'Tablet Android com tela de 10 polegadas e processador quad-core para multitarefa.', 299.99, 'https://m.media-amazon.com/images/I/61dxj9a7NHL._AC_SX569_.jpg'),</br>
('Caixa de Som Portátil', 'Caixa de som Bluetooth resistente à água, ideal para uso ao ar livre.', 79.99, 'https://m.media-amazon.com/images/I/718DcKdvQDL._AC_SY679_.jpg'),</br>
('Impressora Multifuncional', 'Impressora a jato de tinta com scanner e copiadora integrados.', 199.99, 'https://m.media-amazon.com/images/I/51OY4i1sFEL._AC_SX569_.jpg'),</br>
('Mouse Gamer', 'Mouse óptico com design ergonômico e iluminação RGB personalizável.', 49.99, 'https://m.media-amazon.com/images/I/61VFsNg1rXL._AC_SX425_.jpg'),</br>
('Smart TV 4K', 'Smart TV com resolução 4K e tecnologia de imagem HDR para uma experiência de visualização imersiva.', 799.99, 'https://m.media-amazon.com/images/I/71vk2qFDSPL._AC_SX425_.jpg'),</br>
('Teclado Mecânico Gamer', 'Teclado mecânico com switches Cherry MX e retroiluminação RGB para jogos de alto desempenho.', 129.99, 'https://m.media-amazon.com/images/I/61ow7ol23ML._AC_SX425_.jpg'),</br>
('Cadeira Ergonômica', 'Cadeira de escritório ergonômica com ajustes de altura e inclinação para conforto durante longas horas de trabalho.', 199.99, 'https://m.media-amazon.com/images/I/51B0lQ+v1vL._AC_SX522_.jpg'),</br>
('HD Externo 1TB', 'Disco rígido externo com capacidade de 1TB para armazenamento seguro e portátil de dados.', 69.99, 'https://m.media-amazon.com/images/I/710tXwU738L.__AC_SX300_SY300_QL70_ML2_.jpg'),</br>
('Power Bank 20000mAh', 'Carregador portátil de alta capacidade com duas portas USB para recarregar dispositivos móveis em movimento.', 49.99, 'https://m.media-amazon.com/images/I/61otus-W0qL.__AC_SX300_SY300_QL70_ML2_.jpg');</br>
</br>
<p>O arquivo my-api é o frontend da aplicação. Para a sua execução, utilizei o comando npm start, onde se inicia no localhost 3000, onde as rotas são:</p></br>
/ - rota inicial;
/login – rota do login</br>
/cadastro – rota de cadastro</br>
/resetsenha – resetar a senha</br>
/carrinho – rota do carrinho de compras</br>
/pagamento – rota de pagamento</br>
/home – tela home da aplicação, com os produtos destacados</br>

<p>Já o arquivo api-auth-mysql é do backend, onde possui as seguintes rotas:</p></br>
/produtos – visualizar todos os produtos</br>
/produtos:id – visualizar os produtos por id</br>
/cadastrar – cadastrar os usuário no banco de dados mysql, com criptografia de senha.</br>
/login – gerar o token de autenticação para validar o login.</br>

<h1>Instale os módulos do node utilizando o comando npm install node-modules</h1>

