import "./App.scss";
import Calendar from "./src/components/ui/Calendar/Calendar";

export default function App() {
  return (
    <>
      <Calendar variant="month" />
      <Calendar variant="week" />
    </>
  );
}
