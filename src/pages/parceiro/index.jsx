import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css';
import Footer from '../../components/Footer';

function Parceiro(){

    return (
      <>
        <header>
          <div className='divTitle'>
            <h1 className='titlePage'>Seja um parceiro</h1>
          </div>
        </header>

        <p className='text'>Preencha os campos abaixo e se torne um dos nossos parceiros revendedores, com beneficios exclusivos, é simples e rápido e você pode fazer parte ativamente da mudança que tanto desejamos!</p>

        <form className='formCard'>
                <div className='cardTop'>
                    <h3>DADOS PESSOA FÍSICA</h3>
                    <label>NOME</label> <br></br>
                    <input type="text"/> <br></br>

                    <label>CPF</label><br></br>
                    <input type="text"/> <br></br>

                    <label>TELEFONE</label><br></br>
                    <input type="text"/> <br></br>

                    <label>EMAIL</label><br></br>
                    <input type="text"/> <br></br>

                    <label>CIDADE</label><br></br>
                    <input type="text"/> <br></br>
                    <h3>DADOS PESSOA JURÍDICA</h3>
                    <label>EMPRESA</label> <br></br>
                    <input type="text"/> <br></br>

                    <label>CNPJ</label><br></br>
                    <input type="text"/> <br></br>

                    <label>TELEFONE CORPORATIVO</label><br></br>
                    <input type="text"/> <br></br>

                    <label>EMAIL CORPORATIVO</label><br></br>
                    <input type="text"/> <br></br>

                    <label>CIDADE SEDE</label><br></br>
                    <input type="text"/> <br></br>
                    <button className='btn' type="submit">Enviar</button>
                </div>
            </form>  
          <Footer/>
      </>
    )
  }
  
  export default Parceiro;