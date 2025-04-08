import { motion, stagger } from "framer-motion"

const parentVar = {
    hidden: {oapcity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
        }
    }
}

const StaggerAnimation = () => {
  return (
    <div>
        {[...Array(5)].map((_, index) => (
            <div className="box mt-[2rem]" key={index}></div>
        ))}
    </div>
  )
}

export default StaggerAnimation