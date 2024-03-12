const express = require("express");
const bcrypt = require("bcryptjs");
const connection = require('../Config/connection');

const CriarUsuario = async (nome, cpf, email, telefone, senha, cep, logradouro, numero, complemento, bairro, cidade, estado) => {

  // Criptografar a senha
  const hashedSenha = await bcrypt.hash(senha, 10);

  const query = 'INSERT INTO clientes (nome, cpf, email, telefone, senha, cep, logradouro, numero, complemento, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [nome, cpf, email, telefone, hashedSenha, cep, logradouro, numero, complemento, bairro, cidade, estado];
  
  try {
    const [rows] = await (await connection).execute(query, values);
    return rows; // Retorna os resultados, se necessário
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error; // Lança o erro para ser tratado em um nível superior, se necessário
  }
}

module.exports = CriarUsuario;
