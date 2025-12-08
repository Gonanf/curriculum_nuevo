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

function ParallaxSection({ children, className = '', backgroundY = ["0%", "0%"], contentY = ["-50%", "70%"], backgroundOP = [2, -1], contentOP = [1, 1, 0], contentClass = 'z-10' }: Props) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const bgY = useTransform(scrollYProgress, [0, 1], backgroundY)
  const bgOpacity = useTransform(scrollYProgress, [0, 1], backgroundOP)

  const CY = useTransform(scrollYProgress, [0, 1], contentY)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], contentOP)

  return (<motion.section ref={ref} className={className + " relative"} style={{ opacity: bgOpacity, y: bgY }}>
    <motion.div className={contentClass} style={{ opacity: contentOpacity, y: CY }}>
      {children}
    </motion.div>
  </motion.section>)
}

export default ParallaxSection
