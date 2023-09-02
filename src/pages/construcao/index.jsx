import './styles.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import gifconstrucao from './assets/construcao.gif';

function Construcao(){
    return(
    <>
       <figure className='figure'><img className='gif' src={gifconstrucao} alt="" /></figure>
    </>
    )
    
}

export default Construcao;