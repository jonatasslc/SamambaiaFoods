import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css'
import Rodapé from '../../components/Footer'

function Propositos(){

    return (
      <>
        <header>
            <h1>Propósitos</h1>
        </header>

        <figure></figure>

        <p>Missão:

        Estamos aqui para tornar as opções à base de plantas cada vez mais acessíveis a todos, em qualquer lugar.

        Visão:

        Promover o equilíbrio ambiental, social e econômico da sociedade.

        Valores:

        Ética, Inovação e Sustentabilidade.</p>

        <figure></figure>

        <p>Nosso programa de controle de uso de água já foi reconhecido e premiado em diversas oportunidades, além da nossa tecnologia ser pioneira no âmbito nacional, sendo referência no desenvolvimento de tecnologia sustentável no ramo alimentício. Com fontes renováveis de energia em nossas fábricas, incentivando a produção de pequenos produtores familiares, conseguimos alcançar no último ano (2022) a marca de 70% de produtos orgânicos em nossas principais linhas.</p>

        <figure></figure>

        <p>Alimentos orgânicos, de pequenos produtores e com responsabilidade ambiental são a base da nossa matéria prima. Incentivando a produção local e a agricultura familiar, podemos alcançar nosso principal objetivo de revolucionar a cadeia de consumo e alimentação nacional.</p>
      </>
    )
  }
  
  export default Propositos;