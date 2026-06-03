"use client"
import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/6a0485cf2f58f739cbeab92a/48fd40137_generated_91b262dd.png";

export default function Hero(){
  return(
    <div>
      <section id="hero">
      <div className="relative h-screen w-full overflow-hidden">
  
  <img
    src={HERO_IMAGE}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 flex items-center justify-center flex-col bg-gradient-to-b from-black/40 via-black/20 to-black/60">

      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-4"
        >
          Fotografia de momentos eternos
        </motion.p>

           <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl text-center"
        >
          Cada momento merece
          <span className="block mt-2 text-center ">
            ser <em className="text-primary-foreground/90">inesquecível</em>
          </span>
        </motion.h1>

         <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font_body text-base md:text-lg text-white/70 mt-6 max-w-xl text-center"
        >
          Casamentos, batizados e retratos de família com <br/>sensibilidade e arte.
        </motion.p>

        
        <motion.a
          href="#servicos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 px-8 py-3 bg-primary text-primary-foreground font-body text-sm text-white tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors border border-amber-400 hover:bg-amber-400 hover:text-black"
        >
          Conheça meu trabalho
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-white/50" />
          
          </motion.div>
         
        </motion.div>
        
     <div className="absolute bottom-5 right-4">
      <a href="">instagream</a>
      <a href="">fazeboook</a>
     </div>
     
  </div>

 
            
           
</div>

      </section>
     
    </div>
  )
}