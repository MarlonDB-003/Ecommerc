import React from 'react';
import {Link}  from 'react-router-dom';
import { toast } from "react-toastify";
import './card.css';

// eslint-disable-next-line react/jsx-no-duplicate-props
function Card({nome, descricao, valor, imagem_url}){

    const notify = (status) => {
        if (status === 200) {
          toast.success("Compra realizada com sucesso! Clique em Carrinho.");
        } else {
          toast.error("Erro!");
        }
    }

    return <section>
        <div className='row'>
            <div className='div_card'>
                <img className="img-card" src={imagem_url}/>

                {/* {titulo}, {descricao}, {valoe} dentro das tags dos textos*/}
                <h2 className='card_title'>{nome} </h2>
                <h2 className='card_desc'>{descricao}</h2>
                <h2 className='card_preco'>{valor}</h2>

                <Link className="btn w-10 btn btn-lg btn-primary" onClick={() => notify(200)} type="submit">Comprar</Link>

            </div>
        </div>
    </section>

}

export default Card;