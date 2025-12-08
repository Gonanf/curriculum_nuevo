// import { motion } from "motion/react";
import ParallaxSection from "./parallax";
import { GradientElement } from "./gradient";
import Gradient from "./bg_gradient";
import { motion } from "motion/react";

function Habilidades() {
  const seccion1 = ["Rust", "Javascript", "Typescript", "Python", "C++", "HTML", "CSS", "Vue", "Nuxt"]
  const seccion2 = ["ShadCN UI", "TailwindCSS", "Git", "Github", "Linux", "Arch", "Cloudflare", "API Rest", "POO"]

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center"} contentClass="relative min-h-screen flex flex-col backdrop-blur-sm">
      <p className="text-4xl">Habilidades</p>
      <div className='flex grow items-center justify-center gap-1.5' >
        <div className="items-end">
          {seccion1.map((val) =>
            <div className="flex gap-4 items-center" key={val}>
              <div className="w-5 h-5 bg-green-900 rounded-full"></div>
              <motion.p className={"text-xl"} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} >{val}</motion.p>
            </div>)}
        </div>

        <img src="/rust2.png" className="h-full" />

        <div>
          {seccion2.map((val) =>
            <div className="flex gap-4 items-center" key={val}>
              <div className="w-5 h-5 bg-green-900 rounded-full"></div>
              <motion.p className={"text-xl"} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} >{val}</motion.p>
            </div>)}
        </div>


      </div>
    </ParallaxSection>
)
}

export default Habilidades
