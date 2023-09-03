import "./style.css";

import imgBurger from "./assets/samamburger.png";
import imgChicken from "./assets/samamchicken.png";
import imgMilk from "./assets/samamilk.png";
import imgKibe from "./assets/samamkibe.png";

export const Products = () => {
  return (
    <div className="container-products">
      <div className="title-products divTitlep">
        <h1 className="titlePagep ">Conheça nossos Produtos </h1>
      </div>

      <div className="div-cards-products">
        <figure className="image-product">
          <img src={imgBurger} alt="" className="imgproduct" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">SAMAM’BURGER</h3>
          <p className="description-p">
            Feito à base de proteína de ervilha. Não contém derivados de ovo e
            leite. Fonte de vitamina B12, ferro e fibra alimentar. Contém 14g de
            proteína.
          </p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product">
          <img src={imgChicken} alt="" className="imgproduct" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">SAMAM’BURGER</h3>
          <p className="description-p">
            Feito à base de proteína de ervilha. Não contém derivados de ovo e
            leite. Fonte de vitamina B12, ferro e fibra alimentar. Contém 14g de
            proteína.
          </p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product">
          <img src={imgMilk} alt="" className="imgproduct" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">SAMAM’BURGER</h3>
          <p className="description-p">
            Feito à base de proteína de ervilha. Não contém derivados de ovo e
            leite. Fonte de vitamina B12, ferro e fibra alimentar. Contém 14g de
            proteína.
          </p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product">
          <img src={imgKibe} alt="" className="imgproduct" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">SAMAM’BURGER</h3>
          <p className="description-p">
            Feito à base de proteína de ervilha. Não contém derivados de ovo e
            leite. Fonte de vitamina B12, ferro e fibra alimentar. Contém 14g de
            proteína.
          </p>
        </h2>
      </div>
    </div>
  );
};
