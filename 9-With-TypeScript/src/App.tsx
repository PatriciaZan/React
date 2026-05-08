import "./App.css";
import Person from "./components/Person";
import { User, Countries } from "./components/User";
import { UserProvider } from "./context/UserContextProvider";

// const name: string = "Patricia";
// const age: number = 24;
// let isMarried: boolean = false;

// let ages: number[] = [1, 2, 3, 4, 5];
// let person: any = 3

function App() {
  // const fetchUser = () => ({ name: "Luiza", age: 22, isMarried: null });
  // const userFetched = fetchUser();

  return (
    <UserProvider>
      {/* <Person name={"Patricia"} age={24} isMarried={false} />
      <Person name={"Colin"} age={23} isMarried={true} /> */}
      {/* <Person
        name={userFetched.name}
        age={userFetched.age}
        isMarried={userFetched.isMarried}
      /> */}

      <User
        name={"Patricia"}
        age={24}
        isMarried={false}
        country={Countries.Brazil}
      />
    </UserProvider>
  );
}

export default App;
