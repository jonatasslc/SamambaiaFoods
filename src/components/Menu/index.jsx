import React from 'react';
import './styles.css';
import logo from './assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

export default function Menu(){
    return (
        <>
        <nav className='nav'>

        <figure><Link to="/"><img  className='imgLogo' src={logo} alt="Logo da empresa" /></Link></figure>
            <ul className='paths'>
                <Link to="/construcao" className='redirect'><li>Produtos</li></Link>
                <Link to="/construcao" className='redirect'><li>Receitas</li></Link>
                <Link to="/construcao" className='redirect'><li>Onde comprar</li></Link>
                <Link to="/propositos" className='redirect'><li>Propósitos</li></Link>
                <Link to="/parceiro" className='redirect'><li>Seja um parceiro</li></Link>

            </ul>
        </nav>
        </>
    )
}