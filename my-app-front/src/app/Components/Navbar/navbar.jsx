import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){
    return <nav className="navbar navbar-expand-md navbar-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <h1 className='title_home'>Ecom<span>merc</span></h1>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link" aria-current="page">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/carrinho" className="nav-link" aria-current="page">Carrinho</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pagamento" className="nav-link" aria-current="page">Pagamento</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" aria-current="page">SAIR</Link>
                </li>
            </ul>
        </div>
        
    </div>

  </nav>
  }

export default Navbar;