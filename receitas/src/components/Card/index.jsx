import { Soup, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({id ,imagem, titulo, tempo, serve}){
    return(
        <div
            className="m-4 rounded border-2 border-rose-400">
            <Link href={`/receitas/${id}`}>
        
            <Image
                src={imagem}
                width="387"
                height="297"
                alt={titulo}/>
            <h2 className="p-2 bg-rose-300 text-gray-800">
                {titulo}
            </h2>
            <div className="p-2 text-xs flex items-center gap-1">
                <Timer/> {tempo} minuto(s)
            </div>
            <div className="p-2 text-xs flex items-center gap-1">
                <Soup/>serve {serve} pessoa(s)
            </div>
            </Link>
        </div>
    )
}