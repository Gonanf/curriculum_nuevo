import Typed from 'typed.js'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children?: ReactNode,
  className?: string,
  textSpeed?: number
}

function Terminal({ children, className, textSpeed = 35 }: Props) {

  //TODO: Commandline ? or animation
  //First animation

  const text = useRef(null)
  const child = useRef(null)
  const inView = useInView(text)
  const res = useRef<Typed | undefined>(undefined)

  useEffect(() => {
    if (!text.current || !child.current) return

    res.current = new Typed(text.current, {
      stringsElement: child.current,
      typeSpeed: textSpeed,
    })
    res.current.stop()

    return () => {
      res.current!.destroy()
    }
  },[])
  
  useEffect(() => {
    if (!text.current || !child.current) return
    if (!res.current) return
    if (!inView) {res.current.stop(); res.current.reset(); return}

    res.current.start()
  }, [inView])
  return <motion.div className={className}>
    <span ref={text}>
      <div ref={child}>
        {children}
      </div>
    </span>
  </motion.div>
}

export default Terminal;
