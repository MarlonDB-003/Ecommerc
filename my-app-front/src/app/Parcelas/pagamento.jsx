import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/footer';
import './pagamento.css';

function Parcelas(){
    return <section>
      <Navbar />

      <div className='principal'>
        <h1>Sem parcelas a serem pagas</h1>
      </div>

      <Footer />
    </section>
  }

export default Parcelas;