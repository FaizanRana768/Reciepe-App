import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

 const AnimatedComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none sm-block z-50 overflow-hidden">
      <motion.div
        className="w-4 h-4 rounded-full bg-orange-500 fixed pointer-events-none"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="w-12 h-12 rounded-full border-2 border-orange-500/50 fixed pointer-events-none"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 1,
        }}
      />
    </div>
  )
}
export default AnimatedComponent;