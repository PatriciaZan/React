//import {motion} from 'framer-motion'
//import BouncingLoader from "./components/BouncingLoader/BouncingLoader"
//import FlippingCard from "./components/FlippingCard/FlippingCard"

//import AnimatedCard from "./components/AnimatedCard/AnimatedCard"
import AnimatedGallery from "./components/AnimatedGallery/AnimatedGallery"

//import { motion } from "framer-motion"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <motion.div 
        className='box'
        // animate
        // translateX: '200px' = x-200
        // animate={{ x:200 }}/> 

        // scale | skew
        // animate={{ scale: 2 }}/>  

        // Transition
        initial={{ x:0}} 
        animate={{ x: 100 }} 
        // transition={{ delay: 2 }}
        transition={{ duration: 2, ease: 'easeInOut'}}
         />   */}
        
      {/* <BouncingLoader/> */}
      {/* <FlippingCard /> */}
      
      {/* WHILES */}
      {/* <motion.div 
        className="box"
        whileHover={{scale: 1., rotate: 10,}}
        transition={{type: "spring", stiffness: 300}}
      /> */}
      {/* <motion.div 
      className="box" 
      whileTap={{scale: 0.8, backgroundColor: "crimson"}}
      transition={{type: "spring", stiffness: 300}}/>
    </div> */}
      {/* <motion.div 
        className="box" 
        drag
        dragConstraints={{top: -50, left: -50, right: 50, bottom: 50}}/>  */}

        {/* <AnimatedCard /> */}
        <AnimatedGallery />
    </div>
  )
}

export default App