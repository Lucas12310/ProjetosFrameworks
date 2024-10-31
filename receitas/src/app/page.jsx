import Cabecalho from "@/components/Cabecalho";
import Contador from "@/components/Contador"
import CardList from "@/components/CardList";
import Footer from "@/components/Rodape"
import Form from "@/components/Form";

export default function Home() {
  return (
    <div>
      <Cabecalho/>
      {/* <Contador/>
      <Form/> */}
      <CardList/>
      <Footer/>
    </div>
  );
}
