import styles from "./dayCard.module.scss";

export default function DayCard({ day }) {
  return (
    <div className={`${styles.dayCard}  ${day.isToday ? styles.today : ""} `}>
      <div>
        <p className={`${styles.day}`}>{day.number}</p>
      </div>
    </div>
  );
}
