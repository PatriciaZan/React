import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Header from "./app/components/Header";
import Home from "./app/view/Home";
import Layout from "./app/components/Layout";
import ShoppingCart from "./app/view/ShoppingCart";
import { ShoppingListProvider } from "./app/contexts/ShoppingCart";

function App() {
  const route = createBrowserRouter([
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
