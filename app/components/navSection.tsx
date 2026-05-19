"use client"

import React, { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "motion/react-client";


const navdata = [
  {name: "Início",
    link: "#nav"
  },
  {name:"Serviços",
    link:"#servicos"
  },
  {name:"Galeria",
    link:"#galeria"
  },
  {name:"Sobre",
    link:"#sobre"
  },
  {name:"Depoimentos",
    link:"#depoimentos"
  },
  {name:"Contato",
    link:"#contato"
  }

]


export default function Nav(){
  const [menuOpen , setmenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(()=>{
    const handScroll= ()=> setScrolled (window.scrollY > 50 );
    window.addEventListener("scroll", handScroll);
    return ()=> window.removeEventListener("scroll", handScroll);
  },[]);

  return(
        <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ?"back_white backdrop-blur-md shadow-sm py-3": "bg-transparent py-5" }`}
    >

    <div className="flex mx-auto gap-10 items-center justify-between">
      <a className={`ml-5 flex items-center gap-2 font-heading text-xl font-semibold tracking-wide" ${scrolled ? "text-foreground": "text-white"} `} href="">  <Camera className={`" w-10 h-10" ${scrolled ? "text-primary": "text-white"}`}/>
      <span>Lucas Martins</span></a>
        
   
     <nav id="nav" className=" gap-8 mr-20 hidden md:flex items-center">
      {navdata.map(nav=>(
        <a key={nav.link} 
        href={nav.link} 
         className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
              }`}
        >{nav.name}</a>
      ))}
 <a  className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-primary border border-amber-300 rounded-sm hover:bg-amber-300 p-3 ${
                scrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
              }`}  href="">Solicitar orçamento</a>
     </nav>

      <div className="flex justify-end "> 
      <button className={`md:hidden flex mr-5  ${scrolled ? "text-foreground": "text-white"}`} onClick={()=>setmenuOpen(!menuOpen)}>
        {menuOpen ? <X/> : <Menu/>}
      </button>
        </div>

      </div>

      
      

<AnimatePresence>
     {menuOpen &&  ( 

      <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md  bg-white pb-10 mt-2"
          >

           

     <nav id="nav" className="flex flex-col gap-5 px-6 py-4 pb-5 ">
      {navdata.map(nav=>(
        <div>
        <a className="hover:text-amber-300" href={nav.link}
        key={nav.link}
        onClick={()=>setmenuOpen(false)}
        >{nav.name}</a>

        </div>
      ))}</nav>

       <a className={` text-sm font-body font-medium tracking-wide transition-colors hover:text-primary border border-amber-300 rounded-sm hover:bg-amber-300 p-3 ml-3`} href="">Solicitar orçamnento</a>
      
      
      </motion.div>
     )}
     
</AnimatePresence>
 

</motion.nav>
  )
}