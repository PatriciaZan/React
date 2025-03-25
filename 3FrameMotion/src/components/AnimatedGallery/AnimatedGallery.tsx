import { motion } from "framer-motion"


const images = [
    {
        src: "",
        caption: "Image 1"
    },
    {
        src: "",
        caption: "Image 2"
    },
    {
        src: "",
        caption: "Image 3"
    },
]


const AnimatedGallery = () => {
  return (
    <div className="w-[80%] flex">
        {images.map((image, index) => (
            <motion.div 
                key={index} 
                className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
                whileHover={{scale:1.05}}
                >

                <img src={image.src} alt={image.caption} className="w-full h-auto"/>

                <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    whileHover={{opacity: 1}}
                    >
                <p className="text-lg">{image.caption}</p>
                </motion.div>
            </motion.div>
        ))}
    </div>
  )
}

export default AnimatedGallery