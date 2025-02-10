import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"

import RootRouter from "./Routes/RootRouter";
import ErrorPage from "./ErrorPage";
import HomePage from "./Routes/HomePage";
import SingleProductPage from "./Routes/SingleProductPage";
import AboutPage from "./Routes/AboutPage";
import Contact from "./Routes/Contact";
import ProductsPage from "./Routes/ProductsPage";
import ModelPage from "./Routes/ModelPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/products",
        element: <ProductsPage/>
      },
      {
        path: "/service/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/models",
        element: <ModelPage/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>
);
