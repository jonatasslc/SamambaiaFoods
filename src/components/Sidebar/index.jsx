import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "../Menu/assets/logo.png";

import './style.css';

import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <Menu  className="sidebar">
      <figure>
        <Link to="/">
          <img className="imgLogo" src={logo} alt="Logo da empresa" />
        </Link>
      </figure>
      <ul className="container-item">
        <Link to="/produtos">
          <li className="menu-item redirect">Produtos</li>
        </Link>
        <Link to="/receitas">
          <li className="menu-item redirect">Receitas</li>
        </Link>
        <Link to="/onde-comprar">
          <li className="menu-item redirect">Onde comprar</li>
        </Link>
        <Link to="/propositos">
          <li className="menu-item redirect">Propósitos</li>
        </Link>
        <Link to="/parceiro">
          <li className="menu-item redirect">Seja um parceiro</li>
        </Link>
      </ul>
    </Menu>
  );
};
