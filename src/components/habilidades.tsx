import type { ReactNode } from "react";
import ParallaxSection from "./parallax";
import { motion } from "motion/react";
import { useState } from "react";

function Item({ children, onHover, index }: { children: ReactNode; onHover: (index: number) => void, index: number }) {
  return (
    <motion.div 
      className="flex gap-4 items-center rounded-full cursor-pointer" 
      initial={{ scale: 1, color: "var(--muted)", textShadow: "0 0 0" }} 
      whileHover={"hover"} 
      variants={{ 
        hover: { 
          scale: 1.1, 
          color: "white", 
          textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6", 
          backgroundColor: "rgba(100,100,100,1)", 
          padding: "10%" 
        } 
      }}
      onHoverStart={() => {
        onHover(index);
      }}
      onHoverEnd={() => onHover(0)}
    >
      <motion.div 
        className="w-5 h-5 bg-linear-120 from-cyan-500 to-amber-950 rounded-full" 
        variants={{ hover: { filter: "blur(5px)" } }}
      ></motion.div>
      <motion.p className="text-xl">{children}</motion.p>
    </motion.div>
  )
}

function Habilidades() {
  const seccion1 = ["Rust", "Javascript", "Typescript", "Python", "C++", "HTML", "CSS", "Vue", "Nuxt"]
  const seccion2 = ["ShadCN UI", "TailwindCSS", "Git", "Github", "Linux", "Arch", "Cloudflare", "API Rest", "POO"]
  const images = ["/rust2.png", "/ts.png", "/js.png", "/python.png", "/cpp.png", "/html.png", "/css.png", "/vue.png", "/nuxt.png","/shadcn.png"]
  
  const [currentImage, setCurrentImage] = useState("/rust2.png")

  const handleImageHover = (index: number) => {
    //TODO: Maybe later
    //setCurrentImage(images[index])
  }

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center"} contentClass="sticky inset-0 min-h-screen flex flex-col backdrop-blur-sm">
      <div className="border-4 border-fuchsia-950 min-h-[90vh] m-12 flex flex-col">
        <p className="text-4xl p-6 font-extrabold">Habilidades</p>

        <div className='flex grow justify-evenly gap-1.5 border-t-4 border-fuchsia-950 p-4' >
          <div className="items-end justify-between flex flex-col ">
            {seccion1.map((val, index) => <Item key={val} onHover={handleImageHover} index={index}>{val}</Item>)}
          </div>

          <motion.img 
            src={currentImage} 
            className=" self-center drop-shadow-2xl drop-shadow-amber-300/50 " 
            whileHover={{scale: 1.1, rotate: 5}}
          />

          <div className=" flex flex-col justify-between">
            {seccion2.map((val, index) => <Item key={val} onHover={handleImageHover} index={index + seccion1.length}>{val}</Item>)}
          </div>
        </div>

      </div>
    </ParallaxSection>
  )
}

export default Habilidades
