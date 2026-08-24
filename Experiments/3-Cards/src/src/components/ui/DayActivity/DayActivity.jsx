import styles from "./dayActivity.module.scss";

export default function DayActivity({ activity }) {
  return (
    <div className={styles.activity}>
      <p>{activity.name}</p>
      <p>{activity.distance}</p>
      <p>{activity.time}</p>
    </div>
  );
}
