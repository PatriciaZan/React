import styles from "./zoom.module.scss";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Zoom() {
  const containerRef = useRef(null);

  // 1. Track scroll progress of the container section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Triggers when top hits top, ends when bottom hits bottom
  });

  // 2. Map scroll progress (0 to 1) to scale values (1 to 4)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  // Optional: Map progress to opacity for a fade-out effect at the end
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Sticky wrapper keeps the element locked in the viewport while zooming */}
      <div className={styles.sub}>
        <motion.div style={{ scale, opacity }} className={styles.motion}>
          {/* Your target image or video to zoom */}
          <img
            src={`./src/assets/images/explorer.png`}
            alt="Landscape"
            className={styles.image}
          />
        </motion.div>
      </div>
    </div>
  );
}
