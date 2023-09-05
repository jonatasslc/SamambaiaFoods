import socialIcons from './assets/socialIcons.png';
import contatoIcons from './assets/contactIcons.png';
import './styles.css';

export default function Footer(){
    return (
      <footer className="footer">
        <figure>
          <img
            className="contatoIcons"
            src={socialIcons}
            alt="Ícones redes sociais"
          />
          <p className="mediaSocial">
            @samambaia.foods<p>@samambaia.corp</p>
          </p>
        </figure>
        <div className="center">
          <p className="slogan">PLANTE SEU FUTURO SAMAMBAIA CORP ®</p>
        </div>
        <figure>
          <p className="mediaSocial2">
            samambaia@corp.com
            <p>(11) 4002-8922</p>
          </p>
          <img
            className="contatoIcons"
            src={contatoIcons}
            alt="Ícones de contato"
          />
        </figure>
      </footer>
    );
}