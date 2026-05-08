import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export default function Person(props: Person) {
  //   const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false); // will auto infer BUT is good to do it to
  const [personBio, setPersonBio] = useState<string | null>(null);

  //   const toggleInfo = () => {
  //     setIsShowInfo(!isShowInfo);
  //   };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <div>
      {/* {isShowInfo && ( */}
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person: {props.isMarried ? "is marries" : "is not married"}</p>
      </>
      {/* )} */}
      <p>
        {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
      <input onChange={handleChange} />
      {/* <button onClick={toggleInfo}>Toggle Info</button> */}
    </div>
  );
}
