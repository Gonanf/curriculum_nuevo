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
      backSpeed: 15,
      backDelay: 1000,
      loop: false,
      showCursor: true,
      cursorChar: '|',
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
  
  return (
    <motion.div 
      className={`
        relative 
        rounded-lg 
        p-4 
        font-mono 
        text-green-400 
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span 
        ref={text}
        className="block leading-relaxed"
      >
        <div ref={child} className="hidden">
          {children}
        </div>
      </span>
      
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 rounded-lg pointer-events-none"></div>
    </motion.div>
  )
}

export default Terminal;
