
import Convite from "./components/conviteSection";
import Depoimentos from "./components/depoimentosSection";
import Footer from "./components/fotterSection";
import Hero from "./components/heroSection";
import Nav from "./components/navSection";
import Portifolio from "./components/portifolioSection";
import Servicos from "./components/servicosSrection";
import Perfil from "./components/perfilSection";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Servicos/>
      <Perfil/>
      <Portifolio/>
     <Depoimentos/>
     <Convite/>
     <Footer/>
    </div>
  );
}
