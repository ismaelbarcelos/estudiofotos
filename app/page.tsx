
import Convite from "./components/conviteSection";
import Depoimentos from "./components/depoimentosSection";
import Footer from "./components/fotterSection";
import Hero from "./components/heroSection";
import Nav from "./components/navSection";
import Portifolio from "./components/portifolioSection";
import Servicos from "./components/servicosSrection";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Servicos/>
      <Portifolio/>
     <Depoimentos/>
     <Convite/>
     <Footer/>
    </div>
  );
}
