import React from 'react';
import styles from './styles.css';
import logo from './assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

export default function Menu(){
    return (
        <>
        <nav className='nav'>
        <figure><Link to="/"><img  className='' src={logo} alt="Logo da empresa" /></Link></figure>
            <ul className='paths'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/construcao"><li>Produtos</li></Link>
                <Link to="/construcao"><li>Receitas</li></Link>
                <Link to="/construcao"><li>Onde comprar</li></Link>
                <Link to="/propositos"><li>Propósitos</li></Link>
                <Link to="/parceiro"><li>Seja um parceiro</li></Link>
            </ul>
        </nav>
        </>
    )
}