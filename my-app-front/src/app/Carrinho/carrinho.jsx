import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';
import './carrinho.css';

function Carrinho(){
    return <section>
      <Navbar />

      <div className='principal'>
        <h1>Sem compras no carrinho</h1>
      </div>

      <Footer />
    </section>
  }

export default Carrinho;