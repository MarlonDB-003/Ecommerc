const mysql = require("mysql2/promise");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerc",
});


// db.connect((err) => {
//   if (err) {
//       console.log('Erro ao conectar no servidor...', err)
//       return
//   }
//   console.log('Conexão estabelecida!')
// })

// db.end((err) => {
//   if(err) {
//       console.log('Erro ao finalizar a conexão...', err)
//       return 
//   }
//   console.log('A conexão foi concluída...')
// })

module.exports = db;
