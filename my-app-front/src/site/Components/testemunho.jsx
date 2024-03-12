import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container">

        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Estou extremamente satisfeito com a minha experiência de compra no site Ecommerc. Desde a navegação fácil até a entrega rápida, tudo foi excepcional.</h2>
                        <img src="Images/cliente.jpg"/>                
                        <em>Marcio Martins - São Paulo</em>  
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>O design intuitivo do site tornou a busca pelos produtos que eu precisava uma tarefa simples e agradável. Além disso, a variedade de produtos disponíveis foi impressionante e atendeu a todas as minhas necessidades.</h2>
                        <img src="Images/cliente.jpg"/>                
                        <em>João Silva - Rio de Janeiro</em>  
                    </div>      

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>;
  }

export default Testemunho;