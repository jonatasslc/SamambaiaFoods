import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Propositos from '../pages/propositos/index';
import Rodape from '../components/Footer/index';
import Parceiro from '../pages/parceiro';
import Construcao from '../pages/construcao';
import Menu from '../components/Menu';

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/rodape" element={ <Rodape /> } />
                <Route path="/propositos" element={ <Propositos /> } />
                <Route path="/parceiro" element={ <Parceiro /> } />
                <Route path="/construcao" element={ <Construcao /> } />
                <Route path="/menu" element={ <Menu /> } />
            </Routes>
        </Router>
    );  
}

export default Root;