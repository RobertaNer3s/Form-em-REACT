import { useState } from "react";
import "./App.css";

function App() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [telefone, setTelefone] = useState('');
const [descricao, setDescricao] = useState('');

function onSubmit(e){
  e.preventDefault();
  alert ('Seu cadastro foi enviado com sucesso!');
  console.log(nome);
  console.log(email);
  console.log(telefone);
  console.log(descricao);

  window.open(
    `https://wa.me/55DIGITESEUNUMEROCOMDDD?text=Olá, meu nome é:${nome}`
  )
}


  return (
    <div className="background-app">
      <div className="modal">
        <h1 className="title">Dev. em Construção</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="input-text"
            onChange={(e) => setNome(e.currentTarget.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            className="input-text"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            className="input-text"
            onChange={(e) => setTelefone(e.currentTarget.value)}
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            className="text-area"
            onChange={(e) => setDescricao(e.currentTarget.value)}
          ></textarea>
          <button className="btn-submit" type="submit">
            {" "}
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
