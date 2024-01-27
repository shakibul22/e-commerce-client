import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";
import ProductDetails from "../Pages/ProductDetails";
import Shop from "../Pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
       path:"/" ,
       element:<Home/>
      },
      {
       path:"/cart" ,
       element:<Cart/>
      },
      {
       path:"/checkout" ,
       element:<CheckOut/>
      },
      {
       path:"/productDetails" ,
       element:<ProductDetails/>
      },
      {
       path:"/shop" ,
       element:<Shop/>
      },
    ]
  },
]);
