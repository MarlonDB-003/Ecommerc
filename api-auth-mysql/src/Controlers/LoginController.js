const express = require("express");
const loginService = require('../Service/loginService');
const authenticateToken = require('../Middleware/middleware');

const LoginController = async (req, res) => {
  const {email, senha} = req.body;
  console.log(email);
  console.log(senha);
    try{
      const query = await loginService(email, senha);
      return res.status(200).json(query);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Login Invalido' });
    }
  
};

module.exports = LoginController;