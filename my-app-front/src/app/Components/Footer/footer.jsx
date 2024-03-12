import React from 'react';
import './footer.css'

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section className="footer">    
      <div>
            <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter fa-2x"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram fa-2x"></i></a></li>						
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope fa-2x"></i></a></li>
            </ul>
	    </div>
      <a href="mailto:marlonsilva@bemol.com.br">marlon@ecommerc.com.br</a>
      <p>Desenvolvido por MARLON - {ano}</p>

    </section>;
  }

export default Footer;