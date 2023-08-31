import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css'
import Footer from '../../components/Footer';
import coletividade from './assets/coletividade.jpg';
import premio1 from './assets/premio1.jpg';
import premio2 from './assets/premio2.jpg';
import ingredientes from './assets/ingredientes.jpeg';
import plantando from './assets/plantando.jpeg'
import Menu from '../../components/Menu';

function Propositos(){

    return (
      <>
        <Menu/>
        <header>
          <div className='divTitlep'></div>
          <h1  className='titlePagep'>Propósitos</h1>
        </header>

          <figure className='plantando' className='divShadow'><img src={plantando}></img></figure>
        
          <ul className='infoCard1'>
            <li>Missão:</li>
            <p>Estamos aqui para tornar as opções à base de plantas cada vez mais acessíveis a todos, em qualquer lugar.</p>
          </ul>


        {/* <p className='infoCard1'><h3>• Missão:</h3><br />

        Estamos aqui para tornar as opções à base de plantas cada vez mais acessíveis a todos, em qualquer lugar. <br /><br />

        <h3>• Visão:</h3><br />

        Promover o equilíbrio ambiental, social e econômico da sociedade.<br /><br />

        <h3>• Valores:</h3><br />

        Ética, Inovação e Sustentabilidade.</p><br /> */}
      
      <div className='awards'>
        <figure className='shadowAwards'><img src={premio1} alt="" className='awardsImg'/></figure>
        <figure className='shadowAwards'><img src={premio2} alt="" className='awardsImg'/></figure>
        </div>

        <p className='infoCard2'>Nosso programa de controle de uso de água já foi reconhecido e premiado em diversas oportunidades, além da nossa tecnologia ser pioneira no âmbito nacional, sendo referência no desenvolvimento de tecnologia sustentável no ramo alimentício. Com fontes renováveis de energia em nossas fábricas, incentivando a produção de pequenos produtores familiares, conseguimos alcançar no último ano (2022) a marca de 70% de produtos orgânicos em nossas principais linhas.</p>

        <figure className='ingredientes'><img src={ingredientes} /></figure>

        <p className='infoCard3'>Alimentos orgânicos, de pequenos produtores e com responsabilidade ambiental são a base da nossa matéria prima. Incentivando a produção local e a agricultura familiar, podemos alcançar nosso principal objetivo de revolucionar a cadeia de consumo e alimentação nacional.</p>
        <Footer/>
      </>
    )
  }
  
  export default Propositos;