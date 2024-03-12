import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import './home.css';
import Card from '../Components/Card/card';
import Footer from '../Components/Footer/footer';

function Home(){

  const [repositorios, setRepositores] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
        const response = await fetch('http://localhost:3005/produtos');

        const data = await response.json();

        setRepositores(data)
    }

    buscarDados();

  }, []);

    return <section className='div_principal'>
      <Navbar/>

      {
        repositorios.length > 0 ? (
          <section className="lista">
            {
              repositorios.map((rep) => (        
                <Card key={rep.id} imagem_url={rep.imagem_url} nome={rep.nome} descricao={rep.descricao} valor={rep.valor} />
              ))
            }

          </section>
        ) : (
          <p>Carregando informações</p>
        )
      }
      <Footer />

    </section>
  }

export default Home;