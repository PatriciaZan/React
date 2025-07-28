//import { Suspense } from "react"
//import Form from "./components/Form"
// import FetchTodo from "./components/FetchTodo"

import Profile from "./components/Profile"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    // <Suspense>
    //    <FetchTodo /> 
    //   <Form />
    // </Suspense>

    <div>
      <Sidebar />
      <Profile />
    </div>
  )
}

export default App