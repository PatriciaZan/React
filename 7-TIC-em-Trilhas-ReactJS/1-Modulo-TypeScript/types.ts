// ! TYPE ALIAS

type PersonCar = string;

type CarId = number | string;

type Car = {
  id: CarId;
  person: PersonCar;
  model: string;
  year: number;
  brand: string;
  color: string;
};

const car1: Car = {
  id: 1,
  person: "Patricia",
  model: "Argor",
  year: 2023,
  brand: "Faze",
  color: "blue",
};
const car2: Car = {
  id: 2,
  person: "Leticia",
  model: "Blazer",
  year: 2022,
  brand: "JWT",
  color: "red",
};
const car3: Car = {
  id: 3,
  person: "João",
  model: "Tauros",
  year: 2021,
  brand: "HMS",
  color: "blue",
};

type ListCar = Array<Car>;

let list: ListCar = [car1, car2, car3];

console.log(list[1]);

// ! TYPE INTERFACE
// pode declarar varias instancias
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Patricia",
  age: 24,
};

interface ViewCordenates {
  (x: number, y: number): void;
}

// !

type Car2 = {
  model: string;
};

type Person2 = {
  name: string;
};

type Information = Car2 & Person2;

const information: Information = { model: "JWT", name: "Patricia1" };

console.log(information);

interface PersonCar2 {
  model: string;
  namePerson: string;
}

interface Information2 extends PersonCar2 {}
const information2: Information2 = { model: "JWT", namePerson: "Patricia" };
