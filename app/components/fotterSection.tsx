import { Camera} from "lucide-react";
import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


export default function Footer(){
  return(
    <div>
      <footer >
        <div className="font_body  mt-12 pb-8 pt-8 pl-10 pr-10 grid grid-cols-1 md:grid-cols-4 gap-5 footer_back md:gap-25">
        <div>
          <h1 className="flex mb-2"><Camera className="mr-1"/> Lucas Moreira </h1>
         
          <p className="text_footer font italic">"Fotografias que eternizam momentos que contam histórias"</p>
        </div>
        <div>
          <h2 className="uppercase text-amber-400">
            contato 
          </h2>
          <h3 className="text_footer flex mb-2 mt-2"><FaWhatsapp className="mr-1 text-2xl"/> (88)9999999 </h3>
          <h3 className="text_footer flex"><Mail className="mr-2"/>email </h3>
        </div>
        <div>
          <h2 className="uppercase text-amber-400">localização</h2>
          <h3 className="text_footer flex mt-2"><MapPin className="mr-1"/> Granja -ce </h3>
          <h3 className="text_footer flex mt-2"><MapPin className="mr-1"/> Atendimento</h3>
        </div>
        <div>
          <h2 className="uppercase text-amber-400">Rede sociais</h2>
          <a href="" className="text_footer flex "><FaInstagram className="text-2xl mr-1"/>instagram</a>
    
        </div>
      
</div>

            <p className="footer_back flex justify-center">{new Date().getFullYear()} Todos os direitos reservados</p>
      </footer>
    </div>
  )
}