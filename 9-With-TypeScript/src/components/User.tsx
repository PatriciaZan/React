import { useContext } from "react";

import { UserContext } from "../context/UserContextProvider";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  Brazil = "Brazil",
  France = "France",
  India = "India",
}

export default function User(props: Props) {
  const { addUser } = useContext(UserContext);

  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person: {props.isMarried ? "is marries" : "is not married"}</p>
      <p>Country of origin: {props.country}</p>
    </>
  );
}
