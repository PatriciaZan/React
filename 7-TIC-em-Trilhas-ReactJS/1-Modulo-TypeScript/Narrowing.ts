const calcValue = (value: string | number) => {
  if (typeof value === "number") {
    return console.log(value + value);
  }

  if (typeof value === "string") {
    return console.log(value);
  }
};

calcValue(10);
