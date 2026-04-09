import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingListProvider } from "./app/contexts/ShoppingCart";

import Home from "./app/view/Home";
import Layout from "./app/components/Layout";
import ShoppingCart from "./app/view/ShoppingCart";
import Login from "./app/view/Login";
import SignUp from "./app/view/SignUp";

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      // path: "/",
      // element: (
      //   <>
      //     <Header />
      //     <Home />
      //   </>
      // ),
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shopping-cart", element: <ShoppingCart /> },
      ],
    },
  ]);

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <ShoppingListProvider>
        <RouterProvider router={route}></RouterProvider>
      </ShoppingListProvider>
    </div>
  );
}

export default App;
