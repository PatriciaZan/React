import styles from "./sectionhero.module.scss";
import { motion, useScroll, useTransform } from "motion/react";

export default function SectionHero() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className={styles.imgContainer}>
      <motion.img
        src={`./src/assets/images/explorer.png`}
        alt="explorer image"
        style={{ scale: scale }}
      />
    </div>
  );
}
