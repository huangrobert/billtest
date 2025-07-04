import { createBrowserRouter } from "react-router-dom"; 
import New from "../pages/New";
import Layout from "../pages/Layout";
import Year from "../pages/Year"
import Month from "../pages/Month";
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'month',
        element:<Month />
      },
      {
        path:'year',
        element:<Year />
      }
    ]
},
{
  path:'/new',
  element:<New />
}
])
export default router