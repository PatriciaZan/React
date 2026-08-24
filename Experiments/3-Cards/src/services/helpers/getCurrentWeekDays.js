export default function getCurrentWeekDays() {
  const today = new Date();
  const week = [];
  const currentDayOfWeek = today.getDay();

  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - currentDayOfWeek);

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(firstDayOfWeek);
    dayDate.setDate(firstDayOfWeek.getDate() + i);

    const dayName = dayDate.toLocaleDateString("en-US", { weekday: "short" });
    const dayNum = dayDate.getDate();

    week.push({
      name: dayName,
      number: dayNum,
      isToday: dayDate.toDateString() === today.toDateString(),
    });
  }

  return week;
}
