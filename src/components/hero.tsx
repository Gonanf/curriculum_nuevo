import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import ParallaxSection from "./parallax";
import Terminal from "./terminal";
//TODO: Moving gradient does not work
function Hero() {
  return (
    <ParallaxSection className="cyber-grid-dark">
      <div className='grow flex flex-col gap-5 min-h-screen  justify-center md:items-center' >
        <motion.h1 
          className='md:text-9xl max-md:text-2xl font-extrabold md:text-center font-mono  bg-linear-to-r to-secondary from-neutral-300 bg-clip-text text-transparent bg-[200%]'
          initial={{ 
            backgroundPosition: "0% 0%",
            opacity: 0,
            y: 20
          }} 
          animate={{ 
            backgroundPosition: ["0% 0%", "200% 0%", "0% 0%"],
            opacity: 1,
            y: 0
          }} 
          transition={{
              duration: 1,
              ease: "easeInOut"
          }}
        >Gabriel Solotorevsky</motion.h1>
        <p className='text-neutral-400 text-sm'>Desarrollador de Software/Fullstack</p>
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='md:min-w-[50%] max-md:w-full  bg-[#0F172A]         
          border-2 
          border-green-500/40
          shadow-[0px_0px_45px_10px_rgba(51,209,122,0.6)]
        bg-black/95 

          rounded-3xl p-2'>

          <p>
            <span className='text-fuchsia-800'>chaos</span>
            <span className='text-amber-300'>@</span>
            <span className='text-green-600'>chaman</span>
            <span className='text-amber-300'> {'>'} </span>
            <span className='text-fuchsia-800'> fasfetch</span>
          </p>
          <div className='flex w-full '>
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
                <span className='text-cyan-300'>OS</span>
                <span>:</span>
                <span> Arch Linux x86_64</span>
                <br />
                <span className='text-cyan-300'>Kernel</span>
                <span>:</span>
                <span> Linux 6.17.8-arch1-1</span>
                <br />
                <span className='text-cyan-300'>Shell</span>
                <span>:</span>
                <span> fish 4.2.1</span>
                <br />
                <span className='text-cyan-300'>WM</span>
                <span>:</span>
                <span> Hyprland 0.52.1 (Wayland)</span>
                <br />
                <span className='text-cyan-300'>Terminal</span>
                <span>:</span>
                <span> kitty 0.44.0</span>
                <br />
                <span className='text-cyan-300'>Terminal Font</span>
                <span>:</span>
                <span> JetBrainsMonoNF-Regular</span>
                <br />
                <span className='text-cyan-300'>Age</span>
                <span>:</span>
                <span> 18 years</span>
                <br />
                <span className='text-cyan-300'>Location</span>
                <span>:</span>
                <span> Argentina</span>
                <br />
                <span className='text-cyan-300'>Language</span>
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
