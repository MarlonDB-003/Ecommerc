const express = require("express");
const userService = require('../Service/usuarioService');

const UsuarioController =  async (req, res) => {

  const { nome, cpf, email, telefone, senha, cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body;

  try{
    const query = await userService(nome, cpf, email, telefone, senha, cep, logradouro, numero, complemento, bairro, cidade, estado);
    return res.status(200).json(query);
  }catch (err) {
    console.error(err);
     res.status(404).json({ message: 'Erro ao cadastrar usuário' });
  }
};

module.exports = UsuarioController;