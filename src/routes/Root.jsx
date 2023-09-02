import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Propositos from '../pages/propositos/index';
import Rodape from '../components/Footer/index';
import Parceiro from '../pages/parceiro';
import Construcao from '../pages/construcao';
import Menu from '../components/Menu';
import { Home } from '../pages/Home';
import Footer from '../components/Footer/index';
import { Products } from "../pages/produtos";

const Root = () => {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          {/* <Route
            path="/rodape"
            element={<Rodape />}
          /> */}
          <Route
            path="/propositos"
            element={<Propositos />}
          />
          <Route
            path="/parceiro"
            element={<Parceiro />}
          />
          <Route
            path="/produtos"
            element={<Products />}
          />
          {/* <Route
            path="/menu"
            element={<Menu />}
          /> */}
        </Routes>
        <Footer />
      </Router>
    );  
}

export default Root;