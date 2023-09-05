import "./style.css";

import parceiro01 from "./assets/parceiro01.png";
import parceiro02 from "./assets/parceiro02.png";
import parceiro03 from "./assets/parceiro03.png";
import parceiro04 from "./assets/parceiro04.png";

export const OndeComprar = () => {
  return (
    <div className="container-products">
      <div className="title-products divTitlep">
        <h1 className="titlePagep ">Onde Comprar</h1>
      </div>

      <div className="div-cards-products">
        <figure className="image-product img-parceiro">
          <img src={parceiro01} alt="" className="" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">ENXUTO</h3>
          <p>Av. John Boyd Dunlop, 440 Jd. Aurélia, Campinas - SP</p>
          <p className="description-p"> Telefone: (19) 3743-4600</p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product img-parceiro">
          <img src={parceiro02} alt="" className="" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">DALBEM</h3>
          <p>Av. Nossa Sra. de Fátima, 1270, Taquaral, Campinas - SP</p>
          <p className="description-p">Telefone:(19) 3754-6300</p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product img-parceiro">
          <img src={parceiro03} alt="" className="x" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">TENDA</h3>
          <p>Rua Padre Bernardo da Silva, 1111, São Bernardo, Campinas - SP</p>
          <p className="description-p">Telefone: (19) 3772-4999</p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product img-parceiro">
          <img src={parceiro04} alt="" className="img-parceiro" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">ATACADÃO</h3>
          <p>Av. Império do Sol Nascente, 52, Jardim Aurelia, Campinas - SP </p>
          <p className="description-p">Telefone:(19) 3754-6300</p>
        </h2>
      </div>
    </div>
  );
};
