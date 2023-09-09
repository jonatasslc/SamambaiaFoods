import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import coletividade from "./assets/coletividade.jpg";
import premio1 from "./assets/premio1.png";
import premio2 from "./assets/premio2.png";
import ingredientes from "./assets/ingredientes.jpeg";
import plantando from "./assets/plantando.jpeg";

function Propositos() {
  return (
    <div className="container">
      <div className="divTitlep">
        <h1 className="titlePagep">Propósitos</h1>
      </div>

      <figure className="plantando">
        <img className="img-plantando" src={plantando}></img>
      </figure>

      <ul className="infoCard1">
        <li>
          Missão:
          <p>
            Estamos aqui para tornar as opções à base de plantas cada vez mais
            acessíveis a todos, em qualquer lugar.
          </p>
        </li>

        <li>Visão:

        <p>Promover o equilíbrio ambiental, social e econômico da sociedade.</p>
        </li>

        <li>Valores:

        <p>Ética, Inovação e Sustentabilidade.</p>
        </li>
      </ul>

      <div className="awards">
          <img src={premio1} alt="" className="awardsImg" />
          <img src={premio2} alt="" className="awardsImg" />
      </div>

      <p className="infoCard2-p">
        Nosso programa de controle de uso de água já foi reconhecido e premiado
        em diversas oportunidades, além da nossa tecnologia ser pioneira no
        âmbito nacional, sendo referência no desenvolvimento de tecnologia
        sustentável no ramo alimentício. Com fontes renováveis de energia em
        nossas fábricas, incentivando a produção de pequenos produtores
        familiares, conseguimos alcançar no último ano (2022) a marca de 70% de
        produtos orgânicos em nossas principais linhas.
      </p>

      <figure className="ingredientes">
        <img src={ingredientes} />
      </figure>

      <p className="infoCard3">
        Alimentos orgânicos, de pequenos produtores e com responsabilidade
        ambiental são a base da nossa matéria prima. Incentivando a produção
        local e a agricultura familiar, podemos alcançar nosso principal
        objetivo de revolucionar a cadeia de consumo e alimentação nacional.
      </p>
    </div>
  );
}

export default Propositos;
