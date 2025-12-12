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
  // children?: ReactNode,
  left?: boolean,
  // animate?: boolean,
  // bottom?: boolean,
  item: Items[],
  percentage: MotionValue,
}

function PartContainer({ left = true, item, percentage }: PropsContainer) {

  //TODO: Implement only one and then animate and replace the elements title, description and image



  const l_value = left ? ["0%", "100%"] : ["100%", "0%"]
  const r_value = [...l_value].reverse()

  const change = 1 / item.length

  const leftside = useTransform(percentage, [0.5, 0.75], l_value)
  const rightside = useTransform(percentage, [0.5, 0.75], r_value)

  const op_Ar: [Array<number>, Array<string>] = bottom ? [[0.25, 0.5], ["0%", "100%"]] : [[0.5, 1], ["100%", "0%"]]
  const op = useTransform(percentage, op_Ar[0], op_Ar[1])

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
  const ref = useRef(null)


  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })


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
    <ParallaxSection ref={ref} className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center min-h-full h-full"} contentClass="relative min-h-screen h-full flex flex-col backdrop-blur-sm">
      <div className="border-4 border-fuchsia-950 mt-4 ml-4 mr-4 pb-4 flex flex-col">
        <p className="text-4xl p-6 sticky inset-0">educacion</p>

        <div className='grid gap-1.5 border-t-4 border-fuchsia-950' >



          <PartContainer item={items} left={true} percentage={scrollYProgress}>
          </PartContainer>





        </div>

      </div>
    </ParallaxSection>
  )
}

export default Educacion
