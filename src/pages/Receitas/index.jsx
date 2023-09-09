import imgMid from "./assets/imageMid.png";
import imgTop from "./assets/imageTop.png";

import "./style.css";

export const Receitas = () => {
  return (
    <div className="container receitas">
      <div className="divTitlep">
        <h1 className="titlePagep">Receitas</h1>
      </div>
      <figure className="plantando">
        <img className="img-plantando imgTop" src={imgTop}></img>
      </figure>

      <h2 className="title-h2 titulo-receitas">
        <h3 className="titlePagep title-h3">SAMAM’BURGER</h3>
      </h2>
      <div className="div-receita">
        <div className="ingredientes-receitas">
          <h3>Ingredientes</h3>
          <p className="description-p">
            Pão de sua preferência;
            <br />
            Samam’burger;
            <br /> Fatias de tomate;
            <br />
            Ketchup e outros molhos a vontade;
            <br />
            Rúcula;
            <br />
            Cebola
          </p>
        </div>

        <div className="ingredientes-receitas modo-preparo">
          <h3>Modo de Preparo</h3>

          <p className="description-p">
            Frite o Samam’burger da forma que preferir, seja no azeite ou air
            frier fica suculento e extremamente saboroso! Em seguida monte seu
            lanche usando os ingredientes em camadas de acordo com seu gosto.
          </p>
        </div>
      </div>
      <figure className="plantando">
        <img className="img-plantando imgMid" src={imgMid} />
      </figure>

      <h2 className="title-h2 titulo-receitas">
        <h3 className="titlePagep title-h3">SOBREMESA</h3>
      </h2>
      <div className="div-receita">
        <div className="ingredientes-receitas">
          <h3>Ingredientes</h3>

          <p className="description-p">
            3 bananas maduras congeladas;
            <br />
            200 ml de Samam’milk;
            <br />
            2 a 3 colheres (sopa) de açúcar demerara, melado ou outro adoçante;
            <br />
            50 ml de água 2 colheres (sopa) de cacau em pó.
          </p>
        </div>

        <div className="ingredientes-receitas modo-preparo">
          <h3>Modo de Preparo</h3>

          <p className="description-p">
            Com as bananas já congeladas, coloque-as no liquidificador e bata
            até obter um creme liso e homogêneo. Em seguida, acrescente o
            adoçante, o leite e a água e volte a bater. Adicione em seguida o
            cacau em pó. Depois é só bater até obter uma mistura homogênea e, se
            necessário, corrigir o açúcar.
          </p>
        </div>
      </div>
    </div>
  );
};
