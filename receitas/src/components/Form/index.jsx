'use client'

import { useState } from "react";

export default function Form(){

    const [nome, setNome] = useState("")

    return(
        <div className="m-8">
            <h2>Nome: {nome}</h2>
            <form>
                <input 
                type="text"
                className="text-black"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                />

            </form>
        </div>
    )
}