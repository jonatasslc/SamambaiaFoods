import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

const initialValue = {
  id: '',
  nome: '',
  cpf: 0,
  telefone: 0,
  email: '',
  cidade: '',
  empresa: '',
  cnpj: 0,
  telefoneEmpresa: 0,
  emailEmpresa: '',
  cidadeEmpresa: '',
};

function Parceiro(){

  const [values, setValues] = useState(initialValue);

  const navigate = useNavigate();

  function onSubmit(evento){
      evento.preventDefault();

      const url = '/';

      api.post(url, values)
          .then( () =>{
            alert("Cadastro efetuado com sucesso, em breve entraremos em contato!");
          })
  }

  function onChange(ev){
      const {name, value } = ev.target

      setValues({ ...values, [name]:value})
  }

    return (
      <>
        <header>
          <div className='divTitle'></div>
          <h1 className='titlePage'>Seja um parceiro</h1>
        </header>

        <p className='text'>Preencha os campos abaixo e se torne um dos nossos parceiros revendedores, com beneficios exclusivos, é simples e rápido e você pode fazer parte ativamente da mudança que tanto desejamos!</p>

        <form onSubmit={onSubmit} className='formCard'>
                <div className='cardTop'>
                    <h3>DADOS PESSOA FÍSICA</h3> <br />
                    <label className='labelStyle' htmlFor="nome">NOME</label> <br></br>
                    <input required autocomplete="off" type="text" id="nome" name="nome" onChange={onChange}/> <br></br>

                    <label className='labelStyle' htmlFor="cpf">CPF</label><br></br>
                    <input required type="number" id="cpf" name="cpf" onChange={onChange} minlength="11"/> <br></br>

                    <label className='labelStyle' htmlFor="telefone">TELEFONE</label><br></br>
                    <input required type="number" id="telefone" name="telefone" onChange={onChange} minlength="10"/> <br></br>

                    <label className='labelStyle' htmlFor="email">EMAIL</label><br></br>
                    <input required type="text" id="email" name="email" onChange={onChange}/> <br></br>

                    <label className='labelStyle' htmlFor="cidade">CIDADE</label><br></br>
                    <input required type="text" id="cidade" name="cidade" onChange={onChange}/> <br></br> <br />
                    <h3>DADOS PESSOA JURÍDICA</h3> <br />
                    <label className='labelStyle' htmlFor="empresa">EMPRESA</label> <br></br>
                    <input required type="text" id="empresa" name="empresa" onChange={onChange}/> <br></br>

                    <label className='labelStyle' htmlFor="cnpj">CNPJ</label><br></br>
                    <input required type="number" id="cnpj" name="cnpj" onChange={onChange} minlength="14"/> <br></br>

                    <label className='labelStyle' htmlFor="telefoneEmpresa">TELEFONE CORPORATIVO</label><br></br>
                    <input required type="number" id="telefoneEmpresa" name="telefoneEmpresa" onChange={onChange} minlength="10"/> <br></br>

                    <label className='labelStyle' htmlFor="emailEmpresa">EMAIL CORPORATIVO</label><br></br>
                    <input required type="text" id="emailEmpresa" name="emailEmpresa" onChange={onChange}/> <br></br>

                    <label className='labelStyle' htmlFor="cidadeEmpresa">CIDADE SEDE</label><br></br>
                    <input required type="text" id="cidadeEmpresa" name="cidadeEmpresa" onChange={onChange}/> <br></br>
                <button className='btnForm' type="submit">ENVIAR</button>
                </div>
            </form> 
      </>
    )
  }
  
  export default Parceiro;