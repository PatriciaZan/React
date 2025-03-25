import { motion } from "framer-motion"


const StaggerAnimation = () => {
  return (
    <div>
        {[...Array(5)].map((_, index) => (
            <div className="box mt-[2rem]"></div>
        ))}
    </div>
  )
}

export default StaggerAnimation