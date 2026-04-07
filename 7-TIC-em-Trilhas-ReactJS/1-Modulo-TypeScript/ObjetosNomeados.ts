// 1. Reutilizar e exportar
type User = {
  name: string;
  username: string;
};

type Car = {
  brand: string;
  model: string;
  year: number;
  color: string;
};

type Person = {
  name: string;
  age: number;
  car: Car;
};

const objectPerson = (user: User) => {
  return console.log(`O meu nome é ${user.name} e meu username é ${user.name}`);
};

const viewPersonCar = (person: Person) => {
  return console.log(`
        The person: ${person.name} with the age of ${person.age} has the car:
        ${person.car.brand}
        ${person.car.color}
        ${person.car.year}
        ${person.car.model}
        `);
};
const newCar: Car = { model: "Argo", brand: "Feze", color: "Azul", year: 2023 };
viewPersonCar({ name: "Patricia", age: 24, car: newCar });

// literal
type Cor = "red" | "blue" | "green";

type ClassNameCor<T extends Cor> = `color-${T}`;

const getCorName = <T extends Cor>(color: T): ClassNameCor<T> => {
  return `color-${color}`;
};

const red = getCorName("red");
const blue = getCorName("blue");
const green = getCorName("green");

console.log(red);
console.log(blue);
console.log(green);
