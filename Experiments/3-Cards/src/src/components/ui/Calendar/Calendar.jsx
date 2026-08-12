import styles from "./calendar.module.scss";
import DayCard from "../DayCard/DayCard";
import getCurrentWeekDays from "../../../../services/helpers/getCurrentWeekDays";

// I must render the number of days by the variant type
// Week = 7 days || Month = days in teh current month

export default function Calendar({ children, variant = "week" }) {
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentWeekDay = today.getDay();

  const shortDay = today.toLocaleDateString("en-US", { weekday: "short" });
  const dayOfMonth = today.getDate(); // Returns 1 - 31

  console.log(currentYear, currentMonth, currentWeekDay, shortDay);

  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = getCurrentWeekDays();
  console.log(weekDays);

  const activities = [
    {
      id: 1,
      start_date: "2026-08-12T14:28:43.511Z",
      name: "Activity1",
      type: "Ride",
      distance: "33km",
      time: "1h30m",
      score: "134",
    },
    {
      id: 2,
      start_date: "2026-08-13T14:28:43.511Z",
      name: "Activity2",
      type: "Run",
      distance: "5km",
      time: "30m",
      score: "234",
    },
  ];
  //console.log(activities);

  // const dayActivities = activities.filter(
  //   (item) => item.start_date.substring(8, 10) === day,
  // );

  return (
    <div className={styles.calendar}>
      <div className={styles.infomation}>
        <h4>
          {dayOfMonth},{WEEKDAYS[currentWeekDay]}
          {MONTHS[currentMonth]}
        </h4>
        <div className={styles.weekName}>
          {WEEKDAYS.map((name) => (
            <p>{name}</p>
          ))}
        </div>
      </div>
      <div className={styles.days}>
        <div>day number {currentWeekDay}</div>
      </div>
    </div>
  );
}
