import { easeIn, easeInOut, motion, useScroll, useTransform } from "motion/react"
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

function ParallaxSection({ children, className = '', backgroundY = ["-30%", "0%", "30%"], contentY = ["-30%", "0", "30vh"], backgroundOP = [0, 1, 0], contentOP = [0, 1, 1, 0], contentClass = 'z-10 sticky inset-0' }: Props) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const bgY = useTransform(scrollYProgress, [0,  0.5, 1], backgroundY)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], contentOP)

  const CY = useTransform(scrollYProgress, [0, 0.5, 0.75], contentY)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], contentOP)

  return (<motion.section className={className + " relative min-h-[150%]"} style={{ opacity: bgOpacity, y: bgY }}>
    <motion.div ref={ref} className={contentClass} style={{ opacity: contentOpacity }}>
      {children}
    </motion.div>
  </motion.section>)
}

export default ParallaxSection
