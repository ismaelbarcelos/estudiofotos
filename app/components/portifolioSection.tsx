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


const portifolioData = [
  {src:"https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/2c31cb668_generated_4fa5b246.png"},
  {src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/903a2ee10_generated_1545b19e.png"},
  {src:"https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/903a2ee10_generated_1545b19e.png"},
  { src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/5b40830a1_generated_cc36b1ed.png", alt: "Alianças de casamento sobre rosas brancas" },
  { src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/f41f697a7_generated_43416f15.png", alt: "Primeira dança do casal na recepção" },
  { src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/0b90336b2_generated_878591e3.png", alt: "Avós com netos em parque no outono" },
  { src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/d40dac4cd_generated_6d1b03b1.png", alt: "Retrato da noiva com buquê" },
  { src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/ddbc9909e_generated_42f3f307.png", alt: "Mãe beijando bebê no batizado" },
  { src: "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/49a759347_generated_0d4c34f2.png", alt: "Casal rindo em sessão de fotos" }
    ]

export default function Portifolio(){
  return (
    <div>
      <section className="bg-black pt-8 pb-8">

        <div>
                 <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >


       <div className="flex flex-col items-center mb-25">
        <h3 className="uppercase font_body mb-5 text-amber-500"> Portfólio</h3>
        <h1 className="text-5xl font text-white">Momentos que viram memórias</h1>

         <div className="w-25 h-0.5 bg-amber-600 mt-6" />
       </div>
</motion.div>
        </div>

<div className='ml-5 mr-5 '> 
<Swiper className='ml-50 swiper-wrapper'   loop={true}  speed={4000} spaceBetween={10} slidesPerView={3} modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade]} autoplay={{ delay: 0 }   }>

{portifolioData.map((img,index)=>

<SwiperSlide>
        <img className='rounded-sm aspect-3/4 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105' key={img.src} src={img.src} alt={img.alt} />
      </SwiperSlide>
)}
</Swiper>
    </div>
      </section>
    </div>
  )
}