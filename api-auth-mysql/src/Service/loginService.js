const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const connection = require('../Config/connection');

const loginUser = async (email, senha, req, res) => {
    try{      
        const [results] = await (await connection).execute('SELECT * FROM clientes WHERE email = ?', [email]);
        
        if (results.length === 0) {
            console.error('Credenciais inválidas');
            // res.status(401).json({ error: 'Credenciais inválidas' });
            return; // Finaliza a execução após enviar a resposta
        }

        const user = results[0];
        const isPasswordMatch = await bcrypt.compare(senha, user.senha);

        if (!isPasswordMatch) {
            console.error('Credenciais inválidas');
            res.status(401).json({ error: 'Credenciais inválidas' });
            return; // Finaliza a execução após enviar a resposta
        }

        // Gerar token de sessão
        const token = jwt.sign({ id: user.id }, 'seu_segredo', { expiresIn: '1h' });
        return token;
        // res.status(200).json({ token });

    }catch (error){
        console.error('Erro ao autenticar usuário:', error);
        // res.status(500).json({ error: 'Erro ao autenticar usuário' });
    }
}

// // Middleware para proteger rotas
// function authenticateToken(req, res, next) {
//     const token = req.headers['authorization'];
//     if (token == null) return res.sendStatus(401);
  
//     jwt.verify(token, 'seu_segredo', (error, user) => {
//       if (error) return res.sendStatus(403);
//       req.user = user;
//       next();
//     });
// }

module.exports = loginUser;