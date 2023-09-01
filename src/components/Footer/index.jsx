import React from 'react';
import socialIcons from './assets/socialIcons.png';
import contactIcons from './assets/contactIcons.png';
import styles from './styles.css';

export default function Footer(){
    return (
      <footer className="footer">
        <figure>
          <img
            className="contactIcons"
            src={socialIcons}
            alt="Ícones redes sociais"
          />
          <p className="socialAddress">
            @samambaia.foods<p>@samambaia.corp</p>
          </p>
        </figure>
        <div className="center">
          <p className="slogan">PLANTE SEU FUTURO SAMAMBAIA CORP ®</p>
        </div>
        <figure>
          <p className="socialAddress2">
            samambaia@corp.com
            <p>(11) 4002-8922</p>
          </p>
          <img
            className="contactIcons"
            src={contactIcons}
            alt="Ícones de contato"
          />
        </figure>
      </footer>
    );
}