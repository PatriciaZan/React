import { motion } from "framer-motion"

const AnimatedCard = () => {
  return (
    <motion.div 
      initial={{
        scale: 1, rotate: 0
      }}
      whileHover={{
        scale: 1.05, rotate: 3
      }}
      whileTap={{
        scale: 0.95
      }}
      drag
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50,
      }}
      dragElastic={0.2}

      transition={{
        type: "spring", stiffness:300
      }}

      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">

      <img className="w-full h-48 object-cover" src="" alt="Card img" />

      <div className="o-6">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">This is a simple card with framer motion and tailWind css</p>
        <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition">More</button>
      </div>
    </motion.div>
  )
}

export default AnimatedCard