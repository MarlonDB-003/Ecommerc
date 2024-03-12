import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Site from '../site/site';
import Login from '../app/Login/login';
import Cadastro from '../app/Cadastro/cadastro';
import ResetSenha from '../app/ResetSenha/resetsenha';
import Home from '../app/Home/home';
import Carrinho from '../app/Carrinho/carrinho';
import Pagamento from '../app/Parcelas/pagamento';
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Routering = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Site}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/cadastro' Component={Cadastro}/>
        <Route exact path='/resetsenha' Component={ResetSenha}/>
        <Route exact path='/carrinho' Component={Carrinho}/>
        <Route exact path='/pagamento' Component={Pagamento}/>
        <Route exact path='/home' Component={Home}/>
      </Routes>
    </Router>
    <ToastContainer autoClose={3000} />
  </>)
}

export default Routering;
