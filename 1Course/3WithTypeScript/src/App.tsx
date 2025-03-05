// import User from "./components/User"
// import Button from "./Chellenges/1Button/Button"
// import UserInfo from "./Chellenges/2ReusableTypes/UserInfo"
// import AdminInfo from "./Chellenges/2ReusableTypes/AdminInfo"
// import { Info, AdminInfoList } from "./Chellenges/2ReusableTypes/types"
//import { useState } from "react"

import UserList from "./Chellenges/6UserList/UserList"


// function App() {
//   {/* #2 */}
//   const user: Info = {
//     id: 1,
//     name: 'Pati',
//     email: 'pati@gmail.com'
//   }
//   const admin: AdminInfoList = {
//     id: 2,
//     name: 'Jane',
//     email: 'jane@gmail.com',
//     role:'admin',
//     lastLogin: new Date()
//   }

//   return (
//     <div>
//       {/* <User name="Pati" age={23} isStudent={true} /> */}
//       {/* <User><p>Hello</p></User> */}



//       {/* CHALLENGES */}

//       {/* #1 */}
//       {/* <Button 
//         label="Click" 
//         onClick={() => console.log('Clicked')}
//         disabled={false}
//       /> */}

//       {/* #2 */}
//       {/* <UserInfo user={user} />
//       <AdminInfo admin={admin}/> */}
//       <UserInfo 
//         username="Patricia" 
//         email="patricia@gmail.com" 
//         age={20}
//         location={["Earth", "BR"]}
//         />

//       <AdminInfo
//         username="Patricia" 
//         email="patricia@gmail.com" 
//         age={20}
//         location={["Mars", "Unknow "]}
//         admin="yes"
//       />

//       {/* #1 */}
//       {/* #1 */}
//       {/* #1 */}

//     </div>
//   )
// }

// export default App

// CHALLENGE 3 _______________________________________________
/*
import UserProfile from "./Chellenges/3useState-TodoList/UserProfile";
import TodoList from "./Chellenges/3useState-TodoList/TodoList";

const App = () => {
  const [ count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>

      <UserProfile />
      <TodoList />
    </div>
  )
}

export default App
*/

// FORM ______________________________
/*
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Form />

    </div>
  )
}

export default App
*/
// CHALLENGE 4 ___________________________________
/*
import ContactForm from "./Chellenges/4useRef/ContactForm"
import EventHandling from "./Chellenges/4useRef/EventHandling"
import FocusInput from "./Chellenges/4useRef/FocusInput"

const App = () => {
  return (
    <div>
      <FocusInput />
      <ContactForm />
      <EventHandling />
    </div>
  )
}

export default App
*/

// CONTEXT FOLDER + MyContext = MyCounter
/*
import MyContextCounter from "./components/MyContextCounter"

const App = () => {
  return (
    <div>
      <MyContextCounter />
    </div>
  )
}

export default App
*/
// COUNTER for ___________________________________
/*
import Counter2 from "./components/Counter2"
const App = () => {
  return (
    <div>
      <Counter2 />
    </div>
  )
}

export default App
*/
// CHALLENGE 5 ________________________________
/*
import Counter from "./Chellenges/5useReducer/Counter"
const App = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
*/
// TYPE FOR useEffect _____________________________________
/*
import MyComponent from "./components/MyComponent"

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App
*/
// CHALLENGE 6 ___________________________


const App = () => {
  return (
    <div>
      <UserList />
    </div>
  )
}

export default App