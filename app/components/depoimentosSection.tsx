"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper/modules";
import { motion } from 'motion/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

const depoimentos = [
  {length:5, descrição:"As fotos ficaram simplesmente incriveis! Lucas consegui capturar cada emoçãodo nosso casamento.",nome:"Juliana & Rafel",evento:"Casamento"},
  {length:5, descrição:"Profissional incrivel atencioso e dedicad. O aniversário a nossa filha ficou perfeito!",nome:"Camila & Bruno",evento:"Aniversário"},
  {length:5,descrição:"O batizado do nosso filho foi registrado com muito carinho. Fotos que vamos guardar para sempre",nome:"Mariana & Gustavo",evento:"Batizado"},
  {length:5,descrição:"O Lucas capturou cada momento do nosso casamento com uma sensibilidade incrível. As fotos ficaram muito além do que imaginávamos. Ele conseguiu eternizar exatamente o que sentimos naquele dia.",nome:"Ana & Pedro", evento:"Casamento"},
  {length:5,descrição:"Fizemos nosso ensaio de família e foi uma experiência maravilhosa! Ele tem um dom para deixar todo mundo à vontade, até as crianças. As fotos ficaram lindas e naturais.",nome:"Familia Oliveira", evento:"Ensaio Familia"},
  {length:5,descrição:"O batizado do nosso filho foi registrado com tanto carinho e profissionalismo. Cada detalhe, cada emoção — tudo ficou perfeito. Super recomendamos o trabalho do Lucas!",nome:"Mariana & Thiago", evento:"Batizado"}
]



export default function Depoimentos(){
  return(
    <div>
      <section className="card_background pt-8 pb-8 mt-20">

        <div>
                 <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >


       <div className="flex flex-col items-center mb-25">
        <h3 className="uppercase font_body mb-5 text-amber-500"> Depoimentos</h3>
        <h1 className="text-5xl font ">O que dizem sobre o meu trabalho</h1>

         <div className="w-25 h-0.5 bg-amber-600 mt-6" />
       </div>
</motion.div>
        </div>

<div className="">
<Swiper className='ml-50 swiper-wrapper grid grid-cols-1 md:grid-cols-3 gap-1 '    loop={true} speed={5000} spaceBetween={10} slidesPerView={3} modules={[Navigation, Pagination, Scrollbar, A11y,]} autoplay={{ delay: 0 }   }>

{depoimentos.map((card)=>

<SwiperSlide className=''>
       <p>{card.descrição}</p>
       <div className='bg-gray-600 w-50 h-0.5 '></div>
       <h3>{card.nome}</h3>
       <p>{card.evento}</p>
      </SwiperSlide>
)}
</Swiper>
    </div>
      </section>
    </div>
  )
}
      
 
