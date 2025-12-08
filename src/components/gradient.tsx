import { useMotionValue, motion, useMotionTemplate } from "motion/react"
import { type ReactNode, useRef } from "react"

interface Props {
  children?: ReactNode,
  className?: string,
  fromColor?: string,
  toColor?: string,
  childClass?: string
}

export function GradientElement({ children, className = 'bg-foreground', fromColor = 'rgba(3,3,2,0.7)  0', toColor = 'rgba(0,0,0,0) 100%', childClass = `absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 z-10 pointer-events-none`, ...props }: Props) {

  console.log("aaa")
  const element = useRef<HTMLDivElement>(null)
  const currentX = useMotionValue(0)
  const currentY = useMotionValue(0)
  const updateMouse = (event: MouseEvent) => {
    if (!element.current) return

    const size = element.current.getBoundingClientRect()
    currentX.set((event.clientX - size.left) / size.width * 100)
    currentY.set((event.clientY - size.top) / size.height * 100)

  }

  return (
    <motion.div ref={element} {...props} className={className + ' group relative z-0'} onMouseMove={updateMouse}>
      <motion.div className={childClass} style={{ backgroundImage: useMotionTemplate`radial-gradient( circle at ${currentX}% ${currentY}%, ${fromColor}, ${toColor} )` }} />
      {children}
    </motion.div>)
}
