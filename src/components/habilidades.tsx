import type { ReactNode } from "react";
import ParallaxSection from "./parallax";
import { motion } from "motion/react";

function Item({ children }: { children: ReactNode }) {
  return (<motion.div className="flex gap-4 items-center rounded-full" initial={{ scale: 1, color: "var(--muted)", textShadow: "0 0 0" }} whileHover={"hover"} variants={{ hover: { scale: 1.1, color: "white", textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6", backgroundColor: "rgba(100,100,100,1)", padding: "10%" } }}>
    <motion.div className="w-5 h-5 bg-linear-120 from-cyan-500 to-amber-950 rounded-full" variants={{ hover: { filter: "blur(5px)" } }}></motion.div>
    <motion.p className={"text-xl"} >{children}</motion.p>
  </motion.div>)
}

function Habilidades() {
  const seccion1 = ["Rust", "Javascript", "Typescript", "Python", "C++", "HTML", "CSS", "Vue", "Nuxt"]
  const seccion2 = ["ShadCN UI", "TailwindCSS", "Git", "Github", "Linux", "Arch", "Cloudflare", "API Rest", "POO"]

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center"} contentClass="sticky inset-0 min-h-screen flex flex-col backdrop-blur-sm">
      <div className="border-4 border-fuchsia-950 min-h-[90vh] m-12 flex flex-col">
        <p className="text-4xl p-6">Habilidades</p>

        <div className='flex grow justify-center gap-1.5 border-t-4 border-fuchsia-950 p-4' >
          <div className="items-end justify-between flex flex-col grow">
            {seccion1.map((val) => <Item>{val}</Item>)}
          </div>

          <motion.img src="/rust2.png" className="h-full grow self-center drop-shadow-2xl drop-shadow-amber-300/50 " variants={{ hover: { rotate: 5 } }} drag dragConstraints={{ top: -10, bottom: 10, left: -10, right: 10 }} />

          <div className="grow flex flex-col justify-between">
            {seccion2.map((val) => <Item>{val}</Item>)}
          </div>
        </div>

      </div>
    </ParallaxSection>
  )
}

export default Habilidades
