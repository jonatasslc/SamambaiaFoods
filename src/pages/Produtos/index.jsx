import "./style.css";

import imgBurger from "./assets/samamburger.png";
import imgChicken from "./assets/samamchicken.png";
import imgMilk from "./assets/samamilk.png";
import imgKibe from "./assets/samamkibe.png";

export const Products = () => {
  return (
    <div className="container">
      <div className="title-products divTitlep">
        <h1 className="titlePagep ">Nossos Produtos </h1>
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
          <h3 className="titlePagep title-h3">SAMAM’CHICKEN</h3>
          <p className="description-p">
            Sem derivados de ovos e leite. Soja certificada de região de não
            desflorestamento. Alto valor nutricional. Sem colesterol. Livre de
            conservantes.
          </p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product">
          <img src={imgMilk} alt="" className="imgproduct" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">SAMAM’MILK</h3>
          <p className="description-p">
            Sem derivados de ovos e leite. Soja certificada de região de não
            desflorestamento. Alto valor nutricional. Sem colesterol. Livre de
            conservantes.
          </p>
        </h2>
      </div>

      <div className="div-cards-products">
        <figure className="image-product">
          <img src={imgKibe} alt="" className="imgproduct" />
        </figure>
        <h2 className="title-h2">
          <h3 className="titlePagep title-h3">SAMAM’KIBE</h3>
          <p className="description-p">
            Fonte de proteínas, cálcio e vitaminas D e B12. Não possui glúten,
            lácteos e colesterol, como todo produto vegetal.
          </p>
        </h2>
      </div>
    </div>
  );
};
