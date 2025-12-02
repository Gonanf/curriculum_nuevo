import { createFileRoute } from '@tanstack/react-router'
import { GradientElement } from './__root'
import Terminal from '../components/terminal.tsx'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils.ts'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
      <GradientElement className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      )} >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
        <div className='grow flex flex-col gap-5 min-h-screen  justify-center items-center' >
          <h1 className='md:text-9xl max-md:text-2xl font-extrabold text-center font-mono spac  bg-linear-to-r to-secondary from-neutral-300 bg-clip-text text-transparent'>Gabriel Solotorevsky</h1>
          <p className='text-neutral-400 text-sm'>Desarrollador de Software/Fullstack</p>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='md:w-[50%] max-md:w-full  bg-[#0F172A]/50 border-2 border-fuchsia-950 rounded-3xl p-2'>

            <p>
              <span className='text-fuchsia-800'>chaos</span>
              <span className='text-amber-300'>@</span>
              <span className='text-green-600'>chaman</span>
              <span className='text-amber-300'> {'>'} </span>
              <span className='text-fuchsia-800'> fasfetch</span>
            </p>
            <div className='flex w-full'>
              <img src='kira.png' className='mix-blend-plus-lighter self-centeri md:w-xs md:h-xs max-md:w-1/2' />
              <Terminal className='block text-left max-md:text-xs'>
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
      </GradientElement>

      <GradientElement className={"bg-[url('/kira.png')] bg-cover"} >
        <div className='grow flex flex-col gap-5 min-h-screen  justify-center items-center' >
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='md:w-[50%] max-md:w-full  bg-[#0F172A]/50 border-2 border-fuchsia-950 rounded-3xl p-2'>
            <p>
              <span className='text-fuchsia-800'>chaos</span>
              <span className='text-amber-300'>@</span>
              <span className='text-green-600'>chaman</span>
              <span className='text-amber-300'> {'>'} </span>
              <span className='text-fuchsia-800'> whoami</span>
            </p>


            <Terminal className='block text-left max-md:text-xs'>
              <p>
                <br />
                <span className='text-fuchsia-800'>Soy un desarrollador autodidacta, actualmente con un interes en los sistemas de bajo nivel.</span>
                <br />
                <br />
                <span className='text-amber-300'>Me considero alguien que se puede adaptar a varias situaciones en cortos periodos de tiempo y aprender lo necesario para avanzar en los proyectos que me proponga.</span>
                <br />
                <br />
                <span className='text-green-600'>Logre realizar sistemas que satisfacen las necesidades de mis clientes cumpliendo las fechas límites.</span>
                <br />
                <br />
                <span className='text-fuchsia-800'>Realice proyectos los cuales pasaron por un proceso de prueba y finalmente se publicaron utilizando servicios distribuidos (Cloudflare Pages, Workers, D1, R2, Etc.)</span>
              </p>
            </Terminal>



          </motion.div>

        </div>


        {/*TODO: I have to see a way to make this image look good and that is responsive*/}
        {/* <div className='w-full min-h-full ' style={{ */}
        {/*   background: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, #020617 100%), url('/yo_fondo.jpeg')", backgroundSize: 'cover', */}
        {/*   backgroundPosition: 'center', */}
        {/*   backgroundRepeat: 'no-repeat' */}
        {/* }} /> */}
      </GradientElement >
    </>

  )
}

