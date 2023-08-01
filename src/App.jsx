import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Root from "./Pages/Root";
import Main, { loadApi } from './Pages/Main';
import Details, {detail} from "./Pages/Details";



function App() {
  const router = createBrowserRouter([
    {
    path:"/",
    element:<Root />,
    children:[
    {
      path: "/",
      element: <Main />,
      loader: loadApi
    },
    {
      path:`/details/:name`,
      element:<Details/>,
      loader: detail,
    }
  ]
  }])
return <RouterProvider router={router}/>
}
export default App
