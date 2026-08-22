export default function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1);

  const firstWeekDay = firstDay.getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);

    days.push({
      number: i,
      date,
      isToday: date.toDateString() === new Date().toDateString(),
    });
  }

  return {
    firstWeekDay,
    days,
  };
}
