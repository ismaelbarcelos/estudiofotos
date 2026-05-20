"use client"
import { motion } from "motion/react"
import { div } from "motion/react-client"
import { ArrowRight } from "lucide-react";

const servicosData = [
  {evento: "Casamento", descricao:"Registros emoionantes do seu grande dia, contano cada detalhe essa história única.",link:"https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/2c31cb668_generated_4fa5b246.png" },
  {evento: "Aniversários", descricao: "Momentos de alegria que se transformam em lembranças para toda a vida", link: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/903a2ee10_generated_1545b19e.png"},
  {evento:"Batizados", descricao:"Um momento especial que ,erece ser eternizado com amor, fé e delicadeza", link: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/9dcb641b5_generated_1e4e69f0.png"}

]

export default function Servicos(){
  return(
    <div>
      <section id="servicos" className="mt-30 mb-15">

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >


       <div className="flex flex-col items-center mb-25">
        <h3 className="uppercase font_body mb-5 text-amber-500"> serviços e especialidades</h3>
        <h1 className="text-5xl font">Ensaios e Eventos</h1>

         <div className="w-25 h-0.5 bg-amber-500 mt-6" />
       </div>
</motion.div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

        {servicosData.map((card , index)=>

          <motion.div
              key={card.evento}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group card_background m-1 ml-4 mr-4 rounded-lg shadow pb-3"
            >

        <div className="relative overflow-hidden rounded-lg aspect-3/4 ">
       
           <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={card.link} alt="" />

          
           </div>
            <div className="font_body mt-3 items-center ">
            <h3 className="item-center mb-1 text-center font_w font">{card.evento}</h3>
          <p className="text-center mb-2 pl-3 pr-3">{card.descricao}</p>
          <div className="flex text-amber-500 justify-center text-lg ">
            <a className="hover:border-b-2" href="">Ver Galeria </a>
           <ArrowRight/> 
          </div>
           </div>
 </motion.div>
        )}
       </div>
      </section>
    </div>
  )
}