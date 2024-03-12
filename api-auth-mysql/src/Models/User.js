const { check } = require('express-validator');

class User {
  constructor(id, nome, cpf, email, telefone, senha, cep, logradouro, numero, complemento, bairro, cidade, estado) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.senha = senha;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

}

function requiredMessage(fieldName) {
  return `${fieldName} é obrigatório`;
}

function invalidEmailMessage() {
  return 'Email inválido';
}

function minLengthMessage(fieldName, minLength) {
  return `${fieldName} precisa ter no mínimo ${minLength} caracteres`;
}


const UserValidador = [
  check('nome').notEmpty().withMessage(requiredMessage('Nome')),
  check('email').isEmail().withMessage(invalidEmailMessage()),
  check('senha').isLength({ min: 8 }).withMessage(minLengthMessage('Senha', 8)),
  // ...

  check('cep').notEmpty().withMessage(requiredMessage('CEP')),
  check('logradouro').notEmpty().withMessage(requiredMessage('Logradouro')),
  check('numero').notEmpty().withMessage(requiredMessage('Número')),
  // ...

  check('cidade').notEmpty().withMessage(requiredMessage('Cidade')),
  check('estado').notEmpty().withMessage(requiredMessage('Estado')),
];

module.exports = { User, UserValidador };

