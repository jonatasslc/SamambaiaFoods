import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css'

function Parceiro(){

    return (
      <>
        <header>
            <h1>Seja um parceiro</h1>
        </header>

        <p>Preencha os campos abaixo e se torne um dos nossos parceiros revendedores, com beneficios exclusivos, é simples e rápido e você pode fazer parte ativamente da mudança que tanto desejamos!</p>

        <form className='formCard'>
                <div>
                    <h3>DADOS PESSOA FÍSICA</h3>
                    <label>Nome</label> <br></br>
                    <input type="text"/> <br></br>

                    <label>CPF</label><br></br>
                    <input type="text"/> <br></br>

                    <label>TELEFONE</label><br></br>
                    <input type="text"/> <br></br>

                    <label>EMAIL</label><br></br>
                    <input type="text"/> <br></br>

                    <label>CIDADE</label><br></br>
                    <input type="text"/> <br></br>
                </div>
                <div>
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
                </div>
                <button className='btn' type="submit">Enviar</button>
            </form>  

      </>
    )
  }
  
  export default Parceiro;