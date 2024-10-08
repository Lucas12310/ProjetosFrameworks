import { Soup, Timer } from "lucide-react";
import Image from "next/image";

export default function Card(){
    return(
        <div
            className="m-4 rounded border-2 border-rose-400"
        >
            <Image
                src="/ovo-com-pepino.png"
                width="387"
                height="297"
                alt="Prato de ovo com pepino"/>
            <h2 
            className="p-2 bg-rose-300 text-gray-800"
            >Ovo com arroz e pepino</h2>
            <div className="p-2 text-xs flex items-center gap-1">
                <Timer/> 25 minutos
            </div>
            <div className="p-2 text-xs flex items-center gap-1">
                <Soup/>serve 2 pessoas
            </div>
        </div>
    )
}