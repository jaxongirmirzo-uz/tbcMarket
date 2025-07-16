import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Basket from "./pages/Basket";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export { App };

// https://dummyjson.com/product
