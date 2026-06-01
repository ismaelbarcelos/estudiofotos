"use client"
import { Heart, Award, Users } from "lucide-react";
import { motion } from "motion/react"

export default function Perfil(){
  return(
    <div>
      <section className="p-5 back_perfil pb-15 ">

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:ml-50 xl:mr-50 items-center"> 

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.7 }}
            className="relative"> 

        <div>
         <img className="rounded-sm aspect-3/4 w-full h-full object-cover " src="nicolas.jpg" alt="" />
        </div>
</motion.div>

  <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.7 }}
          > 

        <div className=" ">
         <h3 className="uppercase font_body mb-3  text-amber-500">Sobre Mim</h3>
         <h1 className="text-3xl font-medium mb-3">Lucas Martins</h1>
         <p className="mb-3 p_perfil">Há mais de 12 anos, dedico minha vida a contar histórias através da fotografia. Minha paixão começou ao registrar o casamento de um amigo próximo e, desde então, nunca mais parei.</p>
         <p className="mb-3 p_perfil">
          Acredito que cada família tem uma história única para ser contada. Meu objetivo é capturar a essência dos seus momentos mais preciosos — com naturalidade, emoção e um olhar artístico que transforma instantes em memórias eternas.
         </p>
         <p className="border_botton pb-3 mb-3 p_perfil">
          Trabalho com uma abordagem documental e sensível, buscando sempre a luz perfeita e os detalhes que fazem cada história ser especial.
         </p>

        

         <div className="grid grid-cols-3 md:grid-cols-3 gap-10 mt-8 " >
          <div className="flex flex-col ">
            <Heart className="text-amber-500 mb-2 "/>
            <h3 className="mb-2 font-medium text-2xl">500+</h3>
            <p>Casamentos</p>
          </div>

          <div className="flex flex-col">
            <Award className="text-amber-500 mb-2"/>
            <h3 className="mb-2 font-medium text-2xl">12</h3>
            <p>Anos de experiência</p>
          </div>

           <div className="flex flex-col">
            <Users className="text-amber-500 mb-2"/>
            <h3 className="mb-2 font-medium text-2xl">2000+</h3>
            <p>Familias atendidas</p>
          </div>

         </div>
        </div>
        </motion.div>
        </section>
      </section>
    </div>
  )
}