import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const initialValue = {
  id: "",
  nome: "",
  cpf: 0,
  telefone: 0,
  email: "",
  cidade: "",
  empresa: "",
  cnpj: 0,
  telefoneEmpresa: 0,
  emailEmpresa: "",
  cidadeEmpresa: "",
};

function Parceiro() {
  const [values, setValues] = useState(initialValue);

  const navigate = useNavigate();

  function onSubmit(evento) {
    evento.preventDefault();

    const url = "/";

    api.post(url, values).then(() => {
      alert("Cadastro efetuado com sucesso, em breve entraremos em conato!");
    });
  }

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  return (
    <div className="container">
      <header>
        <div className="divTitlep">
          <h1 className="titlePage titlePagep">Seja um parceiro</h1>
        </div>
      </header>

      <p className="text">
        Preencha os campos abaixo e se torne um dos nossos parceiros
        revendedores, com beneficios exclusivos, é simples e rápido e você pode
        fazer parte ativamente da mudança que tanto desejamos!
      </p>
      <form onSubmit={onSubmit} className="formCard">
        <div className="cardTop">
          <h3>DADOS PESSOA FÍSICA</h3>
          <label className="labelStyle" htmlFor="nome">
            NOME
          <input type="text" id="nome" name="nome" onChange={onChange} />{" "}
          </label>{" "}
          <label className="labelStyle" htmlFor="cpf">
            CPF
          <input
            type="number"
            id="cpf"
            name="cpf"
            onChange={onChange}
            minlength="11"
            />{" "}
          </label>
          <label className="labelStyle" htmlFor="telefone">
            TELEFONE
          <input
            type="number"
            id="telefone"
            name="telefone"
            onChange={onChange}
            minlength="10"
          />{" "}
          </label>
          <label className="labelStyle" htmlFor="email">
            EMAIL
          <input type="text" id="email" name="email" onChange={onChange} />{" "}
          </label>
          <label className="labelStyle" htmlFor="cidade">
            CIDADE
          <input
            type="text"
            id="cidade"
            name="cidade"
            onChange={onChange}
          />{" "}
          </label>
          <h3>DADOS PESSOA JURÍDICA</h3>
          <label className="labelStyle" htmlFor="empresa">
            EMPRESA
          <input
            type="text"
            id="empresa"
            name="empresa"
            onChange={onChange}
          />{" "}
          </label>{" "}
          <label className="labelStyle" htmlFor="cnpj">
            CNPJ
          <input
            type="number"
            id="cnpj"
            name="cnpj"
            onChange={onChange}
            minlength="14"
          />{" "}
          </label>
          <label className="labelStyle" htmlFor="telefoneEmpresa">
            TELEFONE CORPORATIVO
          <input
            type="number"
            id="telefoneEmpresa"
            name="telefoneEmpresa"
            onChange={onChange}
            minlength="10"
          />{" "}
          </label>
          <label className="labelStyle" htmlFor="emailEmpresa">
            EMAIL CORPORATIVO
          <input
            type="text"
            id="emailEmpresa"
            name="emailEmpresa"
            onChange={onChange}
          />{" "}
          </label>
          <label className="labelStyle" htmlFor="cidadeEmpresa">
            CIDADE SEDE
          <input
            type="text"
            id="cidadeEmpresa"
            name="cidadeEmpresa"
            onChange={onChange}
          />{" "}
          </label>
          <button className="btnForm" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Parceiro;
