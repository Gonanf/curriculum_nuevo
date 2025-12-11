import ParallaxSection from "./parallax";
import { GradientElement } from "./gradient";
import Gradient from "./bg_gradient";
import { easeInOut, motion, MotionValue, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

interface Items {
  titulo: string,
  descripcion: string,
  left: boolean
}

interface Props {
  children?: ReactNode,
  value: MotionValue,
  className?: string
}

interface PropsContainer {
  children?: ReactNode,
  left?: boolean,
  animate?: boolean,
  bottom?: boolean,
  item: Items
}

function PartContainer({ children, left = true, animate = true, bottom = true, item }: PropsContainer) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const l_value = left ? ["0%", "100%"] : ["100%", "0%"]
  const r_value = [...l_value].reverse()

  console.log("L", l_value, "R", r_value)

  const leftside = useTransform(scrollYProgress, [0.5, 0.75], l_value)
  const rightside = useTransform(scrollYProgress, [0.5, 0.75], r_value)

  const Y_Ar: [Array<number>, Array<string>] = bottom ? [[0, 0.5, 1], ["-50vh", "0vh", "50vh"]] : [[0, 0.5, 0.75], ["0vh", "0vh", "85vh"]]
  const op_Ar: [Array<number>, Array<string>] = bottom ? [[0.25, 0.5], ["0%", "100%"]] : [[0.5, 1], ["100%", "0%"]]
  const Y = useTransform(scrollYProgress, Y_Ar[0], Y_Ar[1])
  const op = useTransform(scrollYProgress, op_Ar[0], op_Ar[1])

  return (<motion.div ref={ref} className="min-h-screen relative w-full" >
    <Part className="absolute top-0 w-[50vw] h-full m-4 flex items-end" value={leftside}>
      <Slider></Slider>
    </Part>
    <Part value={rightside}>
      {item.titulo}
      {item.descripcion}
    </Part>
  </motion.div>)

}

function Part({ children, value, className = "absolute top-0 w-[50vw] h-full m-4 " }: Props) {
  value.on('change', (e) => console.log(e))
  return (
    <motion.div className={className} transition={{ duration: 1, ease: easeInOut }} style={{ x: value }}>
      {children}
    </motion.div>
  )
}

function Slider() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  //TODO: Make an option to start from bottom
  const Y = useSpring(useTransform(scrollYProgress, [0.5, 1], ["-90vh", "40vh"]))
  const size = useSpring(useTransform(scrollYProgress, [0.5, 1], ["48px", "0px"]))

  return (<div className="relative h-full" ref={ref}>
    <div className="w-2 bg-fuchsia-950 h-full"></div>
    <motion.div className="rounded-full bg-fuchsia-950 absolute" transition={{ duration: 1, ease: easeInOut }} style={{ y: Y, width: size, height: size, x: "-40%" }}></motion.div>
  </div>)
}

function Educacion() {

  const items: Array<Items> = [
    {
      titulo: "ola",
      descripcion: "ola2",
      left: true
    },
    {
      titulo: "ola",
      descripcion: "ola3",
      left: false
    },
        {
      titulo: "ola",
      descripcion: "ola5",
      left: true
    },
  ]

  return (
    <ParallaxSection className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center min-h-full h-full"} contentClass="relative min-h-screen h-full flex flex-col backdrop-blur-sm">
      <div className="border-4 border-fuchsia-950 mt-4 ml-4 mr-4 pb-4 flex flex-col">
        <p className="text-4xl p-6 sticky inset-0">educacion</p>

        <div className='grid gap-1.5 border-t-4 border-fuchsia-950' >
          {
            items.map((i, index) => {
              return (
                <PartContainer item={i} left={i.left} key={index + "i"} bottom={index != 0} animate={index != 0}>
                </PartContainer>
              )
            })

          }

        </div>

      </div>
    </ParallaxSection>
  )
}

export default Educacion
