"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper/modules";
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

import { Autoplay } from "swiper/modules";

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
        <h1 className="text-5xl font_body text-white">Momentos que viram memórias</h1>

         <div className="w-25 h-0.5 bg-amber-600 mt-6" />
       </div>
</motion.div>
        </div>

<div className='ml-5 mr-5 '> 
<Swiper className='ml-50'   loop={true}  speed={4000} spaceBetween={10} slidesPerView={3} modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade]} autoplay={{ delay: 0 }   }>
      <SwiperSlide>
        <img className='rounded-sm' src="https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/2c31cb668_generated_4fa5b246.png" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/903a2ee10_generated_1545b19e.png" />
       
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/9dcb641b5_generated_1e4e69f0.png" />
      </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/2c31cb668_generated_4fa5b246.png" />
      </SwiperSlide>
        <SwiperSlide>
        <img src="https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/903a2ee10_generated_1545b19e.png" />
       
      </SwiperSlide>
       <SwiperSlide>
        <img src="https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/903a2ee10_generated_1545b19e.png" />
      </SwiperSlide>
    </Swiper>
    </div>
      </section>







    </div>
  )
}