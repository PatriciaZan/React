import DayActivity from "../DayActivity/DayActivity";
import styles from "./dayCard.module.scss";

export default function DayCard({ day, activities }) {
  return (
    <div className={styles.dayCard}>
      <div>
        <p className={styles.day}>{day}</p>
      </div>
      {/* {activities.map((activity) => (
        <DayActivity activity={activity} key={activity.id} />
      ))} */}
    </div>
  );
}
