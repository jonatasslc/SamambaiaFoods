import "../Home/style.css";
import img01 from "./assets/img01.png";
import img02 from "./assets/kibe.png";
import img03 from "./assets/acbf.png";
import img04 from "./assets/ALMONDEGAS.png";
import img05 from "./assets/imagebannerbottom.png";

export const Home = () => {
  return (
    <main className="container">
      <figure className="figure-img-home">
        <img src={img01} alt="" />

        <div className="container-title">
          <h1>samambaia foods</h1>
        </div>
      </figure>
      <p className="container-p">
        Uma empresa de alimentação focada em ingredientes de verdade, veganos e
        acessíveis, utilizando alta tecnologia para o desenvolvimento de
        produtos que vão além de nutrir, contribuir para o desenvolvimento de um
        futuro sustentável para todos.
      </p>

      <div className="cards">
        <div className="card">
          <img src={img02} alt="" />
          <p>
            Nosso kibe tem como base proteina de soja e proteina de arroz, carro
            chefe da linha de pesticos
          </p>
        </div>

        <div className="card">
          <img src={img04} alt="" />
          <p>
          Almôndegas a base de lentilha, rica em proteína e perfeita para a macarronada de domingo.
          </p>
        </div>

        <div className="card">
          <img src={img03} alt="" />
          <p>
          Hambúrguer a base de proteína de ervilha, suculenta e fonte das vitaminas A e B. 
          </p>
        </div>
      </div>

      <div className="cardHome04">
        <img src={img05} alt="" />
      </div>
      <p className="partners">
        Encontre nossos parceiros revendedores, incentive os comércios locais a
        procurarem por nossos produtos e divulgue para pessoas próximas,
        contamos com sua ajuda para plantarmos o nosso futuro!
      </p>
      <p className="slogan-p">“Primeiro você muda a alimentação, depois a alimentação muda você.”</p>
    </main>
  );
};
