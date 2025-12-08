import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll } from 'motion/react'
import { useRef } from 'react'
import Hero from '@/components/hero.tsx'
import Sobre from '@/components/sobre.tsx'
import Habilidades from '@/components/habilidades'
import Experiencia from '@/components/experiencia'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})


function HomeComponent() {

  const section = useRef(null)

  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] })



  return (
    <>
      <motion.div transition={{ delay: 1 }} initial={{ opacity: 1 }} animate={{ opacity: 0 }} className='fixed flex inset-0 justify-center items-center transform-gpu transform-[-50%,-50%] '>
        <motion.div transition={{ delay: 1 }} className='w-full h-full bg-fuchsia-950' initial={{ clipPath: "inset(0 0 0 0)" }} animate={{ clipPath: "inset(0 100% 0 0)" }} >
        </motion.div>
        <motion.div transition={{ duration: 0.5 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} className="w-1 absolute inset-0 translate-x-[50vw] z-10 bg-foreground"></motion.div>
        <motion.div transition={{ delay: 1 }} className='w-full h-full grow bg-fuchsia-950' initial={{ clipPath: "inset(0 0 0 0)" }} animate={{ clipPath: "inset(0 0 0 100%)" }} ></motion.div>
      </motion.div>
      <motion.div layout
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
        animate={{ opacity: 1 }}
        ref={section}
        className='relative'
      >

        <Hero />
        <Sobre />
        <Habilidades />
        <Experiencia />
      </motion.div>
    </>
  )
}

