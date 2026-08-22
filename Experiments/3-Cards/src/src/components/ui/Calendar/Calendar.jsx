import styles from "./calendar.module.scss";
import DayCard from "../DayCard/DayCard";
import getCurrentWeekDays from "../../../../services/helpers/getCurrentWeekDays";
import getMonthDays from "../../../../services/helpers/getMonthDays";
import { useEffect, useMemo, useState } from "react";

export default function Calendar({ children, variant = "week" }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

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

  const activities = [
    {
      id: 1,
      start_date: "2026-08-20T14:28:43.511Z",
      name: "Activity1",
      type: "Ride",
      distance: "33km",
      time: "1h30m",
      score: "134",
    },
    {
      id: 2,
      start_date: "2026-08-18T14:28:43.511Z",
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

  console.log(currentDate);

  const monthData = useMemo(() => {
    return getMonthDays(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate]);

  function handlePreviousMonth() {
    setCurrentDate((date) => {
      return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    });
  }
  function handleNextMonth() {
    setCurrentDate((date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    });
  }

  useEffect(() => {}, [currentDate]);

  return (
    <div className={styles.calendar}>
      <div className={styles.infomation}>
        {variant === "week" ? (
          <h4>
            {today.getDate()}, {WEEKDAYS[today.getDay()]}{" "}
            {MONTHS[today.getMonth()]} {today.getFullYear()}
          </h4>
        ) : (
          <div className={styles.monthHeader}>
            <button onClick={handlePreviousMonth}>←</button>

            <h4>
              {MONTHS[currentDate.getMonth()]} | {currentDate.getFullYear()}
            </h4>

            <button onClick={handleNextMonth}>→</button>
          </div>
        )}

        <div className={styles.weekName}>
          {WEEKDAYS.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </div>

      <div className={styles.days}>
        {variant === "week" ? (
          weekDays.map((day) => <DayCard key={day.date} day={day} />)
        ) : (
          <>
            {/* Espaços antes do primeiro dia do mês */}
            {Array.from({
              length: monthData.firstWeekDay,
            }).map((_, index) => (
              <div key={`empty-${index}`} className={styles.emptyDay} />
            ))}

            {/* Dias do mês */}
            {monthData.days.map((day) => (
              <DayCard key={day.date.toISOString()} day={day} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
