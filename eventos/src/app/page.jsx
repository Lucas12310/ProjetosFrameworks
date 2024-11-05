'use client'

import {useState} from "react";

export default function Home() {

  const [nomeEvento, setNomeEvento] = useState('')
  const [dataEvento, setDataEvento] = useState('')

  //capturar o evento de clicar no botao cadastrar e fazendo um cadastro dos dados
  //no arquivo json
  async function handleSubmit(e){
    e.preventDefault()
    const resposta = await fetch('http://localhost:3000/eventos',{
      method: 'POST',
      headers: {
        'Content-Type':'appication/json'
      },
      body:
        JSON.stringify({
          "titulo":nomeEvento,
          "dataEvento":dataEvento
        })
    })
    if(resposta){
      alert('Cadastrado com Sucesso')
    }
  }

  //dentro do return colocamos as tag html junto com o css twin
  return (
    <div className="m-4">
      <h1 className="text-2xl">Cadastro de Eventos</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label htmlFor="nome">Nome de evento:</label>
          <input 
            type="text" 
            id="nome"
            //capturando oq o usuario escrever no campo e colocando na variavel
            value={nomeEvento}
            onChange={e => setNomeEvento (e.target.value)}
            className="text-gray-950 p-1"/>
        </div>
        <div  className="flex flex-col my-2">
        <label htmlFor="nome">Data do evento:</label>
          <input 
            type="date" 
            id="data"
            value={dataEvento}
            onChange={e => setDataEvento (e.target.value)}
            className="text-gray-950 p-1"/>          
        </div>
        <div>
          <input 
            type="submit" 
            value="cadastrar"
            className="bg-blue-700 text-gray-900"/>          
        </div>
      </form>
    </div>
  );
}
