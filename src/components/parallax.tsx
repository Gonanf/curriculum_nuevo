import { motion, useScroll, useTransform } from "motion/react"
import { useRef, type ReactNode } from "react"

interface Props {
  children: ReactNode,
  className?: string,
  backgroundY?: string[],
  contentY?: string[],
  backgroundOP?: number[],
  contentOP?: number[]
  contentClass?: string
}

function ParallaxSection({ children, className = '', backgroundY = ["-100%","0%","90%"], contentY = ["-100%","0%", "20%"], backgroundOP = [2, -1], contentOP = [0, 1,1, 0], contentClass = 'z-10' }: Props) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const bgY = useTransform(scrollYProgress, [0,0.5, 1], backgroundY)
  const bgOpacity = useTransform(scrollYProgress, [0,0.5,0.8, 1], contentOP)

  const CY = useTransform(scrollYProgress, [0,0.5, 1], contentY)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5,0.8, 1], contentOP)

  return (<motion.section ref={ref} className={className + " relative transform-gpu"} style={{ opacity: bgOpacity, y: bgY }}>
    <motion.div className={contentClass + "transform-gpu"} style={{ opacity: contentOpacity, y: CY }}>
      {children}
    </motion.div>
  </motion.section>)
}

export default ParallaxSection
