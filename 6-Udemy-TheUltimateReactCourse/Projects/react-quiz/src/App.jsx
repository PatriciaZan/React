import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";

const initialState = {
  questions: [],
  // 'loading' , 'error', 'ready', 'active', 'finish'
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action Unkonwn");
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(
    useReducer,
    initialState
  );

  function apiCall() {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }

  // useEffect(() => {
  //   apiCall();
  // }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}

export default App;
