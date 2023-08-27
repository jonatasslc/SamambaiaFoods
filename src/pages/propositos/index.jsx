import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css'
import Footer from '../../components/Footer';
import coletividade from './assets/coletividade.jpg';
import premio1 from './assets/premio1.jpg';
import premio2 from './assets/premio2.jpg';
import ingredientes from './assets/ingredientes.jpeg';

function Propositos(){

    return (
      <>
        <Footer/>
        <header>
          <div className='divTitlep'></div>
          <h1 className='titlePagep'>Propósitos</h1>
        </header>

        <figure className='figureTop'><img src={coletividade} alt="" className='imgHands'/></figure>

        <p className='infoCard'>Missão:

        Estamos aqui para tornar as opções à base de plantas cada vez mais acessíveis a todos, em qualquer lugar.

        Visão:

        Promover o equilíbrio ambiental, social e econômico da sociedade.

        Valores:

        Ética, Inovação e Sustentabilidade.</p>
      
      <div className='awards'>
        <figure><img src={premio1} alt="" className='awardsImg'/></figure>
        <figure><img src={premio2} alt="" className='awardsImg'/></figure>
        </div>

        <p className='infoCard'>Nosso programa de controle de uso de água já foi reconhecido e premiado em diversas oportunidades, além da nossa tecnologia ser pioneira no âmbito nacional, sendo referência no desenvolvimento de tecnologia sustentável no ramo alimentício. Com fontes renováveis de energia em nossas fábricas, incentivando a produção de pequenos produtores familiares, conseguimos alcançar no último ano (2022) a marca de 70% de produtos orgânicos em nossas principais linhas.</p>

        <figure><img src={ingredientes} alt="" /></figure>

        <p className='infoCard'>Alimentos orgânicos, de pequenos produtores e com responsabilidade ambiental são a base da nossa matéria prima. Incentivando a produção local e a agricultura familiar, podemos alcançar nosso principal objetivo de revolucionar a cadeia de consumo e alimentação nacional.</p>
        <Footer/>
      </>
    )
  }
  
  export default Propositos;