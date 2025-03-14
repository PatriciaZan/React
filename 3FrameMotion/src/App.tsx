//import {motion} from 'framer-motion'
//import BouncingLoader from "./components/BouncingLoader/BouncingLoader"

import FlippingCard from "./components/FlippingCard/FlippingCard"

const App = () => {
  return (
    <div>
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
      <FlippingCard />

    </div>
  )
}

export default App