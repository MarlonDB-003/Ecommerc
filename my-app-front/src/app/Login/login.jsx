import React from 'react';
import {Link}  from 'react-router-dom';
import { useState } from "react";
import './login.css';
import api from "../../Service/conection";

function Login(){
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');

  const [input, setInput] = useState('');

  async function logarUser(event){

    if(input === ''){
      alert("Preencha os campos")
      return;
    }
    
    const response = await api.post(`http://localhost:3005/logar`, {
      email: emailInput.value,
      senha: senhaInput.value
    }).then((response) => {
      const token = response.data;

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);
  
      alert('Login válido');
    }).catch((error) => {
      alert('Dados inválidos');
    })

    event.preventDefault();
  }

  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <img className="mb-4" src="Images/logo.png" alt="" height="120"/>
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <div className="form-floating">
        <input type="email" name="email" id="email" className="form-control" placeholder="E-mail" 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
        <label for="floatingInput">E-mail</label>
      </div>

      <div className="form-floating">
        <input type="password" name="senha" id="senha" className="form-control" placeholder="Senha"  
        // value={input}
        // onChange={(e) => setInput(e.target.value)} 
        />
        <label for="floatingPassword">Senha</label>
      </div>
      
      <Link className="w-100 btn btn-lg btn-primary" type="submit" onClick={logarUser}>Acessar</Link>

      <div className="login-links mt-5">
        <Link to="/resetsenha" className="mx-3">Esqueci minha senha.</Link>
        <Link to="/cadastro" className="mx-3">Criar uma conta</Link>
      </div>

      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Marlon</p>
    </form>
  </div>
  }

export default Login;