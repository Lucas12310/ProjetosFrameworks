'use client'

import { use , useEffect, useState } from "react";

export default function EventosByIdPage({params}) {
    const {id} = use (params)
    const [evento, setEvento] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        async function getData() {
            await fetch(`http://localhost:3000/eventos/${id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao listar o evento')
                    }
                    return response.json()
                })
                .then((dados) => {
                    setEvento(dados)
                })
                .catch((error) => setError(error))
                .finally(() => setIsLoading(false))
        }
        getData()
    }, [])


    return (
        <div className="m-4" >
            
            {isLoading && <div className="bg-yellow-200 text-zinc-900 p-2">Carregando...</div>}

            {error && <div className="bg-red-500 p-2">{error.toString()}</div>}

            {evento == null && !isLoading && !error && <div className="bg-blue-500 p-2">Não existem eventos cadastrados</div>}

            <div>
                <div>{evento.id}</div>
                <div>{evento.titulo}</div>
                <div>{evento.data}</div>
            </div>
        </div>
    )
}