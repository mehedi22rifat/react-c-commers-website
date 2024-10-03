import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/Home/SingleProduct";
import Shop from "../pages/Home/Shop";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element:<Home/>
        }, 
        {
          path:'/shop',
          element:<Shop/>
        },
        {
          path: "/shop/:id",
          element:<SingleProduct/>
        }
      ]
    },
  ]);
  

export default router