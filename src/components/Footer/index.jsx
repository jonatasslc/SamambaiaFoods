import React from 'react';
import socialIcons from './assets/socialIcons.png';
import contactIcons from './assets/contactIcons.png';

export default function Footer(){
    return (
        <footer className='footer'>
                <figure><img  className='contactIcons' src={socialIcons} alt="Ícones redes sociais" /></figure>
                <p className='socialAddress'>@samambaia.foods @samambaia.corp</p>


            <div className='center'>
                <p className='slogan'>PLANTE SEU FUTURO SAMAMBAIA CORP ®</p>
            </div>


                <p className='socialAddress'>samambaia@corp.com (11) 4002-8922</p>
                <figure><img  className='contactIcons' src={contactIcons} alt="Ícones de contato" /></figure>
        </footer>
    )
}