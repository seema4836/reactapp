import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
 
} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Team from "../Team";
import Contact from "../../Pages/Contact/Contact";
import Blog from "../../Pages/Blogs/Blog";
import Layout from "../Layouts/Layout";
import Services from "../../Pages/Services/Services";
import ProductList from "../Products/ProductList";
import PageNotFound from "../PageNotFound";
import Products from "../Products/Products";
const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout /> ,
        children: [
      
    {
      path: "/",
      element:<Home /> 
    },
    {
      path: "team",
      element: <Team />,
    },
    {
        path: "services",
        element: <Services />,
      },
    {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "productlist",
        element: <ProductList />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      
        ]
    }
  ]);

  export default router;

