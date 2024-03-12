import React from 'react';
import Menu from './Components/menu';
import Banner from './Components/banner';
import Features from './Components/features';
import Testemunho from './Components/testemunho';
import Footer from './Components/footer';

function Site(){
    return <div>
        <Menu />
        <Banner/>
        <Features/>
        <Testemunho/>
        <Footer/>
    </div>;
}

export default Site;