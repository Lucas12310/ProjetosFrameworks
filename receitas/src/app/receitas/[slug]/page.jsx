'use client';

import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import { useEffect, useState } from "react";

export default function ReceitaPage( {params}){
    const [receita, setReceita] = useState({})
    useEffect(() => {
        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN 

        async function getData(){
            await fetch(`http://localhost:1337/api/receitas/${params.slug}?populate=*`,{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json(response))
            .then(response => setReceita(response.data))
            .catch(error => console.log(error))
        }
        getData()
    },[params])
    return(
        <>
            <Cabecalho/>
            <div className="w-[1400px] m-auto">
                <h2 className="text-2xl pt-2 pb-2">{receita.Titulo}</h2>
                <p>{receita.Conteudo}</p>
                <p className="pt-2">Preparo: <b>{receita.Preparo}</b></p>
                <p className="pt-2">Serve: <b>{receita.Porcoes}</b>pessoa(s)</p>

            </div>
            <Rodape/>
        </>
    )
}