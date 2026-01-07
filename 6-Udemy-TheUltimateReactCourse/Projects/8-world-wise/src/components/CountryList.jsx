import CountryItem from "./CountryItem.jsx";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return (
      <Message message="Add your first Countries by clicking on Countries in the map" />
    );

  const countries = cities.reduce((array, city) => {
    if (!array.map((el) => el.country).includes(city.country)) {
      return [...array, { country: city.country, emoji: city.emoji }];
    } else return array;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
