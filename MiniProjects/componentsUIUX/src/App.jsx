// import "./App.scss";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./view/Layout";

import ComponentsDisplay from "./view/ComponentsDisplay";
import StructureDisplay from "./view/StructureDisplay";
import ResponsiveDisplay from "./view/ResponsiveDisplay";
import Fonts from "./components/ResponsiveDisplay/Fonts";
import Grid from "./components/ResponsiveDisplay/Grid";
import FlexBox from "./components/ResponsiveDisplay/FlexBox";

function App() {
  const route = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <ComponentsDisplay /> },
        { path: "/structure", element: <StructureDisplay /> },
        {
          path: "/responsive",
          element: <ResponsiveDisplay />,
          children: [
            { index: true, element: <Fonts /> },
            { path: "grid", element: <Grid /> },
            { path: "flexbox", element: <FlexBox /> },
          ],
        },
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
