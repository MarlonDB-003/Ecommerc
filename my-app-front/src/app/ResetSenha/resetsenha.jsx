import React from 'react';
import {Link}  from 'react-router-dom';
import './resetsenha.css';

function ResetSenha(){
    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="Images/logo.png" alt="" height="120"/>
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>
             
        <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>

        <div className="login-links mt-5">
          <Link to="/cadastro" className="mx-3">Criar uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Ecommerc</p>
      </form>
    </div>
  }

export default ResetSenha;