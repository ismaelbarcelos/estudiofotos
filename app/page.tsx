
import Depoimentos from "./components/depoimentosSection";
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
    </div>
  );
}
