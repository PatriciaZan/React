import "./App.scss";
import Calendar from "./src/components/ui/Calendar/Calendar";
import DayCard from "./src/components/ui/DayCard/DayCard";

export default function App() {
  const days = ["01", "02", "03", "04", "05", "06", "07"];

  return (
    // <Calendar variant="month">
    //   {days.map((day) => (
    //     <DayCard day={day} />
    //   ))}
    // </Calendar>
    <Calendar variant="month" />
  );
}
