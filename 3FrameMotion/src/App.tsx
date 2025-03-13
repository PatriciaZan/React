import {motion} from 'framer-motion'

const App = () => {
  return (
    <div>
      <motion.div 
        className='box'
        // translateX: '200px' = x-200
        animate={{ x:200 }}/> 
    </div>
  )
}

export default App