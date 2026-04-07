let frutas = ["banana", "maça", "pera", "laranja"];

console.log(frutas[0]);

let frutas2: Array<string | number | any> = ["Banana", "Maça", null];
frutas2 = ["Goiba", 1, 2, 3];

const printTest = (args: unknown) => {
  if (typeof args === "string") {
    return console.log(`Essa palavra possui ${args.length} carracteres`);
  }

  return error("Tipo string não fornecido");
};

//printTest("Patricia");

const error = (message: string): never => {
  throw Error(message);
};

printTest(3);

const objectPerson = (user: { name: string; username: string }) => {
  return console.log(`O meu nome é ${user.name} e meu username é ${user.name}`);
};

objectPerson({ name: "Patricia", username: "Paty" });
