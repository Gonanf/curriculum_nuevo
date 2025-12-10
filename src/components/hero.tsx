import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import ParallaxSection from "./parallax";
import Terminal from "./terminal";
import { GradientElement } from "./gradient";
import Gradient from "./bg_gradient";

function Hero() {
  return (
    <ParallaxSection className={cn(
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",

    )}>
      <div className='grow flex flex-col gap-5 min-h-screen  justify-center md:items-center' >
        <h1 className='md:text-9xl max-md:text-2xl font-extrabold md:text-center font-mono  bg-linear-to-r to-secondary from-neutral-300 bg-clip-text text-transparent'>Gabriel Solotorevsky</h1>
        <p className='text-neutral-400 text-sm'>Desarrollador de Software/Fullstack</p>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='md:min-w-[50%] max-md:w-full  bg-[#0F172A] border-2 border-fuchsia-950 rounded-3xl p-2'>

          <p>
            <span className='text-fuchsia-800'>chaos</span>
            <span className='text-amber-300'>@</span>
            <span className='text-green-600'>chaman</span>
            <span className='text-amber-300'> {'>'} </span>
            <span className='text-fuchsia-800'> fasfetch</span>
          </p>
          <div className='flex w-full'>
            <img src='kira.png' className='mix-blend-plus-lighter self-center md:w-xs md:h-xs max-md:w-1/2' />
            <Terminal className='block text-left max-md:text-xs '>
              <p>
                <span className='text-fuchsia-800'>chaos</span>
                <span className='text-amber-300'>@</span>
                <span className='text-green-600'>chaman</span>
                <br />
                <span>{'-'.repeat(23)}</span>
                <br />
                <br />
                <span className='text-fuchsia-800'>OS</span>
                <span>:</span>
                <span> Arch Linux x86_64</span>
                <br />
                <span className='text-fuchsia-800'>Kernel</span>
                <span>:</span>
                <span> Linux 6.17.8-arch1-1</span>
                <br />
                <span className='text-fuchsia-800'>Shell</span>
                <span>:</span>
                <span> fish 4.2.1</span>
                <br />
                <span className='text-fuchsia-800'>WM</span>
                <span>:</span>
                <span> Hyprland 0.52.1 (Wayland)</span>
                <br />
                <span className='text-fuchsia-800'>Terminal</span>
                <span>:</span>
                <span> kitty 0.44.0</span>
                <br />
                <span className='text-fuchsia-800'>Terminal Font</span>
                <span>:</span>
                <span> JetBrainsMonoNF-Regular</span>
                <br />
                <span className='text-fuchsia-800'>Age</span>
                <span>:</span>
                <span> 18 years</span>
                <br />
                <span className='text-fuchsia-800'>Location</span>
                <span>:</span>
                <span> Argentina</span>
                <br />
                <span className='text-fuchsia-800'>Language</span>
                <span>:</span>
                <span> Spanish (Native), English</span>
              </p>
            </Terminal>
          </div>


        </motion.div>
      </div>

    </ParallaxSection>)
}

export default Hero
