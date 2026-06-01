"use client"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





const background = "camera.jpg" 


export default function Convite(){
  return(
    <div>
      <section className="relative ">
        <div className="">
          <img className="w-full md:h-100 h-110 object-cover absolute inset-0 " src={background} alt="camera profissional" />
        </div>
        <div className="relative flex flex-col items-center top-20 font text-center ">
          <h1 className="text-white text-5xl">Vamos registrar seu próximo </h1>
          
          <h1><em className="text-amber-400  text-6xl ">momento especial?</em> </h1>
<div className="bg-amber-400 h-0.5 w-30 flex items-center mt-5"></div>

          
         <div className="flex  items-center  font_body mt-6 gap-5 m-3">
            <a href="" className="text-white flex bg-green-600 p-1.5 rounded-sm hover:bg-green-700"><FaWhatsapp  className="text-white mr-1 text-2xl "/> Fale comigo pelo WhatsApp</a>
            <a className="text-white flex border border-white p-1.5 rounded-sm hover:bg-amber-50 hover:text-black" href=""><FaInstagram className="mr-1 text-2xl"/>Me siga no Instagram</a>

          </div>
        </div>
         
      </section>
    </div>
  )
}