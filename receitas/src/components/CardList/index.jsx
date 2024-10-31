'use client'
import { useEffect, useState } from "react";
import Card from "../Card";

export default function CardList(){

    const [cards, setCards] = useState([
        // {id: 1, titulo:"Ovo com arroz e pepino", imagem: "ovo-com-pepino.png", tempo:25, serve: 2},
        // {id: 2, titulo:"ovo mexido",             imagem: "ovo-com-pepino.png", tempo:20, serve: 2},
        // {id: 3, titulo:"Ovo com macarrão",       imagem: "ovo-com-pepino.png", tempo:15, serve: 1},
        // {id: 4, titulo:"Pão com ovo",            imagem: "ovo-com-pepino.png", tempo:10, serve: 1}
    ]);

    useEffect(() => {
        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN 

        async function getData(){
            await fetch('http://localhost:1337/api/receitas?populate=*',{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json(response))
            .then(response => setCards(response.data))
            .catch(error => console.log(error))
        }
        getData()
    },[])
    return(
        <div className="flex flex-wrap flex-col m-8">
            <div>Quantidade de receitas: {cards.length}</div>
            <div className="flex flex-wrap">
                {cards.map(c => (
                    <Card
                        key = {c.id}
                        id = {c.documentId}
                        imagem = {`${process.env.NEXT_PUBLIC_STRAPI_URL}${c.Capa.formats.thumbnail.url}`}
                        titulo = {c.Titulo}
                        tempo = {c.Preparo}
                        serve = {c.Porcoes}
                    />
                ))}
            </div>
        </div>
    )
}