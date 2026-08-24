import { useState } from "react";

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

const DATA = [
  {
    id: "b4174ca7-96c3-439c-a202-54058f5f0e0c",
    start_date: "2026-06-03T18:09:32+00:00",
    distance_km: 32.16,
    duration_sec: 5615,
    training_load: 110,
    score: 65,
    user_id: "52b6d3f9-8c8e-4c42-aa9e-21279a19673e",
    activity_types: {
      id: 1,
      icon: "🚴",
      name: "Cycling",
      slug: "cycling",
    },
  },
  {
    id: "13f3e981-0673-4075-8975-5e7d503289a9",
    start_date: "2026-05-28T18:33:48+00:00",
    distance_km: 64.82,
    duration_sec: 10989,
    training_load: 220,
    score: 99,
    user_id: "52b6d3f9-8c8e-4c42-aa9e-21279a19673e",
    activity_types: {
      id: 1,
      icon: "🚴",
      name: "Cycling",
      slug: "cycling",
    },
  },
  {
    id: "ff6a0e9d-4911-4b2a-8f5e-c881fc07c5b0",
    start_date: "2026-05-26T20:18:55+00:00",
    distance_km: 31.26,
    duration_sec: 5391,
    training_load: 106,
    score: 65,
    user_id: "52b6d3f9-8c8e-4c42-aa9e-21279a19673e",
    activity_types: {
      id: 1,
      icon: "🚴",
      name: "Cycling",
      slug: "cycling",
    },
  },
];

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function Calendar() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDay(); // day of week 0/1/2/3...

  const currentDDMMYYYY = new Date();
  console.log(currentDDMMYYYY);

  //console.log(currentDay);

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  console.log(currentYear);
  console.log(currentMonth);
  console.log(currentDay);

  return (
    <div>
      <div>
        <div>
          <button onClick={() => setYear((prevYear) => prevYear - 1)}>
            prev
          </button>
          <p>CURRENT YEAR: {year}</p>
          <button onClick={() => setYear((prevYear) => prevYear + 1)}>
            nex
          </button>
        </div>
        <div>
          <button onClick={() => setMonth((prevMonth) => prevMonth - 1)}>
            prev
          </button>
          <p>CURRENT MONTH: {month}</p>
          <button onClick={() => setMonth((prevMonth) => prevMonth + 1)}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
