"use client"; 
import { motion } from "framer-motion"
const MotionComp = () => {
  return (
    <div className="flex align-center justify-center">
      <motion.div
        className="bg-blue-500 w-[200px] h-[200px] mt-[100px] rounded-full flex items-center justify-center text-white"     
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
         >
            div
      </motion.div>
    </div>
  )
}

export default MotionComp