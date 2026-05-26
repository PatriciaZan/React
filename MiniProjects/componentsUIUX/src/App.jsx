// import "./App.scss";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./view/Layout";
import NavBars from "./view/NavBars";
import Banners from "./view/Banners";
import Cards from "./view/Cards";

function App() {
  const route = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <NavBars /> },
        { path: "/banners", element: <Banners /> },
        { path: "/cards", element: <Cards /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
