'use client'
import { useState } from "react"
export default function Contador(){
    const [contador, setContador] = useState(0)
    return(
        <div className="m-8">
            <h2>Contador: {contador}</h2>
            <input 
                className="border p-2 bg-red-500"
                type="button"
                value="contar" 
                onClick={() => setContador (contador + 1)}/>
        </div>
    )
}