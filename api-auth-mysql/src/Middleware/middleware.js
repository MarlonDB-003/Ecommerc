const express = require("express");
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, 'seu_segredo', (error, user) => {
      if (error) return res.sendStatus(403);
      req.user = user;
      next();
    });
}

module.exports = authenticateToken;