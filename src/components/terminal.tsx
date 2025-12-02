import Typed from 'typed.js'
import { motion } from 'motion/react'
import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children?: ReactNode,
  className?: string
}

function Terminal({ children, className }: Props) {

  //TODO: Commandline ? or animation
  //First animation

  const text = useRef(null)
  const child = useRef(null)
  useEffect(() => {
    if (!text.current || !child.current) return

    const res = new Typed(text.current, {
      stringsElement: child.current,
      typeSpeed: 35,
    })

    return () => {
      res.destroy()
    }
  }, [])
  return <motion.div className={className}>
    <span ref={text}>
      <div ref={child}>
        {children}
      </div>
    </span>
  </motion.div>
}

export default Terminal;
