import styles from "./heroSection.module.scss";

export default function Section({ children }) {
  return <section className={styles.heroSection}>{children}</section>;
}
