import styles from './styles.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import GifConstrucao from './assets/construcao.gif';
import Menu from '../../components/Menu';

function Construcao(){
    return(
    <>
        <Menu/>
        <img className='gif' src={GifConstrucao} alt="" />
        <Footer/>
    </>
    )
    
}

export default Construcao;