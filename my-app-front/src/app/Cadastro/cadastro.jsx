import React from 'react';
import {Link}  from 'react-router-dom';
import {FiSearch} from "react-icons/fi";
import { useState } from "react";
import './cadastro.css';
import api from "../../Service/conection";

function Cadastro(){
  const nomeInput = document.getElementById('nome');
  const cpfInput = document.getElementById('cpf');
  const emailInput = document.getElementById('email');
  const foneInput = document.getElementById('fone');
  const senhaInput = document.getElementById('senha');
  const logradouroInput = document.getElementById('logradouro');
  const numeroInput = document.getElementById('number');
  const complementoInput = document.getElementById('complemento');
  const bairroInput = document.getElementById('bairro');
  const cidadeInput = document.getElementById('city');
  const estadoInput = document.getElementById('state');
  const cepInput = document.getElementById('cep');  

  const [input, setInput] = useState('');

  async function handleSearch(event){
    event.preventDefault();
    console.log(`https://viacep.com.br/ws/${input}/json`)
    if(input === ''){
        alert("Preencha o campo cep")
        return;
    }


    await api.get(`https://viacep.com.br/ws/${input}/json`).then(response => {
        const data = response.data;
        console.log(data);

        logradouroInput.value = data.logradouro;
        bairroInput.value = data.bairro;
        cidadeInput.value = data.localidade;
        estadoInput.value = data.uf;
    });
  }

  async function CriarConta(event){

    const response = await api.post(`http://localhost:3005/cadastrar`, {

      nome: nomeInput.value,
      cpf: cpfInput.value,
      email: emailInput.value,
      telefone: foneInput.value,
      senha: senhaInput.value,
      cep: cepInput.value,
      logradouro: logradouroInput.value,
      numero: numeroInput.value,
      complemento: complementoInput.value,
      bairro: bairroInput.value,
      cidade: cidadeInput.value,
      estado: estadoInput.value
    })
    alert('Dados Salvos com sucesso');
  }


  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
    <img className="mb-4" src="Images/logo.png" alt="" height="120"/>
      <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

      <div className="form-floating">
        <input type="text" name="nome" id="nome" className="form-control" placeholder="Nome"  />
        <label for="floatingInput">Nome Completo</label>
      </div>

      <div className="form-floating">
        <input type="number" name="cpf" id="cpf" className="form-control"  placeholder="CPF" />
        <label for="floatingInput">CPF</label>
      </div>

      <div className="form-floating">
        <input type="email" name="email" id="email" className="form-control"  placeholder="E-mail" />
        <label for="floatingInput">E-mail</label>
      </div>

      <div className="form-floating">
        <input type="number" name="fone" id="fone" className="form-control"  placeholder="Telefone" />
        <label for="floatingInput">Telefone</label>
      </div>

      <div className="form-floating">
        <input type="password" className="form-control" id="senha" name="senha" placeholder="Senha" />
        <label for="floatingPassword">Senha</label>
      </div>

      <div className="form-floating">
        <input
          type="text" name="cep" id="cep" className="form-control" placeholder="Cep" 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          />

        <label for="floatingInput">CEP</label>

        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch/>
        </button>

      </div>

      <div className="form-floating">
        <input type="text" name="logradouro" id="logradouro" className="form-control" placeholder="Logradouro" />
        <label for="floatingInput">Logradouro</label>
      </div>

      <div className="form-floating">
        <input type="text" name="number" id="number" className="form-control" placeholder="Numero" />
        <label for="floatingInput">Numero</label>
      </div>

      <div className="form-floating">
        <input type="text" name="complemento" id="complemento" className="form-control" placeholder="Complemento" />
        <label for="floatingInput">Complemento</label>
      </div>

      <div className="form-floating">
        <input type="text" name="bairro" id="bairro" className="form-control" placeholder="Bairro" />
        <label for="floatingInput">Bairro</label>
      </div>

      <div className="form-floating">
        <input type="text" name="city" id="city" className="form-control" placeholder="Cidade" />
        <label for="floatingInput">Cidade</label>
      </div>

      <div className="form-floating">
        <input type="text" name="state" id="state" className="form-control" placeholder="Estado" />
        <label for="floatingInput">Estado</label>
      </div>
      
      <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={CriarConta}>Criar conta</button>

      <div className="login-links mt-5">
        <Link to="/login" className="mx-3">Já tenho uma conta.</Link>
      </div>

      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 Coders</p>
    </form>
  </div>
  }

export default Cadastro;