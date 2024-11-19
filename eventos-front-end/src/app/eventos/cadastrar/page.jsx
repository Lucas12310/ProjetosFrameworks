'use client'
import { useEffect, useState } from "react";
export default function CadastrarEventoPage(){
    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mensagem, setMensagem] = useState(null);

    async function handleSubmit(event){
        event.preventDefault()
        try{
            let evento = {
                titulo: titulo,
                data:data
            }
            const response = await fetch('http://localhost:3000/eventos', {
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body:
                    JSON.stringify(evento)
            })
            if(!response.ok) throw new Error('Erro ao cadastrar o evento');
            setMensagem("Evento cadastro com sucesso!");
            setTitulo("");
            setData("");
        }catch(e){
            setError(e.message)
        }
    }

    return(
        <div>
            <h1>Cadastro de Evento</h1>
            {mensagem && <div className="m-2 p-2 bg-green-700 text-white">{mensagem}</div>}
            {error && <div className="m-2 p-2 bg-green-700 text-white">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="m-2">
                    <label htmlFor="titulo" className="p-2">Titulo</label>
                    <input  
                            type="text" 
                            id="titulo" 
                            className="text-zinc-950 p-2"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)} />
                </div>
                <div className="m-2">
                    <label htmlFor="data" className="p-2">Data</label>
                    <input
                           type="date" 
                           id="data" 
                           className="text-zinc-950 p-2"
                           value={data}
                           onChange={e => setData(e.target.value)}  />
                </div>
                <div className="m-2">
                    <label htmlFor="data">Data</label>
                    <input type="submit" value="cadastrar" className="p-2 bg-blue-700 text-white" />
                </div>
            </form>
        </div>
    )
}