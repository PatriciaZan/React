export default function getCurrentWeekDays() {
  const today = new Date();
  const week = [];
  const currentDayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)

  // Set start of the week (Assuming week starts on Sunday. Use 1 for Monday)
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - currentDayOfWeek);

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(firstDayOfWeek);
    dayDate.setDate(firstDayOfWeek.getDate() + i);

    // Extract short day name (e.g., "Wed") and date number (e.g., 12)
    const dayName = dayDate.toLocaleDateString("en-US", { weekday: "short" });
    const dayNum = dayDate.getDate();

    week.push({
      name: dayName, // 'Sun', 'Mon', 'Wed', etc.
      number: dayNum, // 10, 11, 12, etc.
      isToday: dayDate.toDateString() === today.toDateString(), // To highlight current day
    });
  }

  return week;
}
