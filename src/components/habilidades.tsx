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
      <div className="border-4 border-fuchsia-950 min-h-screen mt-4 ml-4 mr-4 pb-4 flex flex-col">
        <p className="text-4xl p-6">Habilidades</p>

        <div className='flex grow justify-center gap-1.5 border-t-4 border-fuchsia-950' >
          <div className="items-end justify-between flex flex-col grow">
            {seccion1.map((val) =>
              <div className="flex gap-4 items-center" key={val}>
                <div className="w-5 h-5 bg-green-900 rounded-full"></div>
                <motion.p className={"text-xl"} initial={{ scale: 1, color: "var(--muted)", textShadow: "0 0 0" }} whileHover={{ scale: 1.1, color: "white", textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6" }} >{val}</motion.p>
              </div>)}
          </div>

          <img src="/rust2.png" className="h-full grow self-center" />

          <div className="grow flex flex-col justify-between">
            {seccion2.map((val) =>
              <div className="flex gap-4 items-center" key={val}>
                <div className="w-5 h-5 bg-green-900 rounded-full"></div>
                <motion.p className={"text-xl"} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} >{val}</motion.p>
              </div>)}
          </div>
        </div>

      </div>
    </ParallaxSection>
  )
}

export default Habilidades
