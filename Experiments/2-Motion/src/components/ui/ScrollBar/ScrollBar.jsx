import styles from "./scrollbar.module.scss";

import { useScroll, useSpring } from "motion/react";
import { motion } from "motion/react";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return <motion.div style={{ scaleX }} className={styles.scrollbar} />;
}
