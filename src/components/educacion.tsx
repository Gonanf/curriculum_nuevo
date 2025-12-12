import ParallaxSection from "./parallax";
import { easeInOut, motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

interface Items {
  titulo: string,
  descripcion: string,
  image: string
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
  items: Items[],
  percentage: MotionValue,
}

function PartContainer({ left = true, items, percentage }: PropsContainer) {

  //TODO: Implement only one and then animate and replace the elements title, description and image

  const starting = left ? ["0%", "100%"] : ["100%", "0%"]

  const l_value = Array(items.length).fill(starting[0]).map((_, index) => starting[index % 2])
  const r_value = [...l_value].reverse()

  console.log("LEFT", l_value)
  const change = 0.5 / items.length
  const change_ar = Array(items.length).fill(0.25).map((val, index) => val + (change * index))
  const change_val = Array(items.length).fill(0).map((val, index) => index)

  const leftside = useTransform(percentage, change_ar, l_value)
  const rightside = useTransform(percentage, change_ar, r_value)

  const item_index = useTransform(percentage, change_ar, change_val)

  const [currentIndex, setIndex] = useState(0)


  item_index.on('change', (value) => {
    const floor = Math.floor(value)
    if (currentIndex != floor) {
      setIndex(floor)
      console.log(value)
    }
  })

  // const op_Ar: [Array<number>, Array<string>] = currentIndex ? [[0.25, 0.5], ["0%", "100%"]] : [[0.5, 1], ["100%", "0%"]]
  // const op = useTransform(percentage, op_Ar[0], op_Ar[1])

  return (<motion.div className=" relative h-full w-full grow" style={{ backgroundImage: items[currentIndex].image }} >
    <Part className="absolute top-0 w-[50vw] h-full m-4" value={leftside}>
      <Slider percentage={percentage}></Slider>
    </Part>
    <Part value={rightside} className="flex flex-col justify-center absolute top-0 w-[50vw] h-full m-4 ">
      <h3 className="text-2xl text-white">{items[currentIndex].titulo}</h3>
      <p className="text-lg text-muted-foreground">{items[currentIndex].descripcion}</p>
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

function Slider({ percentage }) {

  //TODO: Make an option to start from bottom
  const Y = useSpring(useTransform(percentage, [0.25, 0.75], ["-80vh", "-10vh"]))


  return (<div className="relative h-full">
    <div className="w-2 bg-fuchsia-950 h-full"></div>
    <motion.div className="rounded-full bg-fuchsia-950 absolute w-12 h-12" transition={{ duration: 1, ease: easeInOut }} style={{ y: Y, x: "-40%" }}></motion.div>
  </div>)
}

function Educacion() {
  const ref = useRef(null)


  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })


  const items: Array<Items> = [
    {
      titulo: "Nuevo Colegio Glew",
      descripcion: "Marzo 2011 - Diciembre 2017",
      image: "kira2.png"
    },
    {
      titulo: "E.E.S.T N°2",
      descripcion: "Marzo 2018 - Diciembre 2025",
      image: "rust2.png"
    },
  ]

  return (
    <ParallaxSection ref={ref} className={"bg-amber-950/50 bg-[url('/kira2.png')] bg-cover bg-center min-h-[500vh]"} backgroundY={["0%", "0%", "0%"]} contentClass="relative min-h-screen h-full flex flex-col backdrop-blur-sm">
      <div className="border-4 border-fuchsia-950 mt-4 ml-4 mr-4 pb-4 flex flex-col sticky inset-0 min-h-screen">
        <p className="text-4xl p-6">educacion</p>

        <div className='flex grow border-t-4 border-fuchsia-950' >



          <PartContainer items={items} left={true} percentage={scrollYProgress}>
          </PartContainer>





        </div>

      </div>
    </ParallaxSection>
  )
}

export default Educacion
