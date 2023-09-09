import React from 'react';
import './styles.css';
import logo from './assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

export default function Menu(){
    return (
      <>
        <nav className="nav" id="outer-container" >

          <figure>
            <Link to="/">
              <img className="imgLogo" src={logo} alt="Logo da empresa" />
            </Link>
          </figure>
          <ul className="paths">
            <Link to="/produtos">
              <li className="redirect">Produtos</li>
            </Link>
            <Link to="/receitas">
              <li className="redirect">Receitas</li>
            </Link>
            <Link to="/onde-comprar">
              <li className="redirect">Onde comprar</li>
            </Link>
            <Link to="/propositos">
              <li className="redirect">Propósitos</li>
            </Link>
            <Link to="/parceiro">
              <li className="redirect">Seja um parceiro</li>
            </Link>
          </ul>
        </nav>
      </>
    );
}