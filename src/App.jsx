import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Root from "./Pages/Root";
import Details, {detail} from "./Pages/Details";
import Pokemon, { loadApi } from './Pages/Pokemon';
import Main from "./Pages/Main";
import Different, { loadDif } from './Pages/Different';



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
      path: "/pokemons",
      element: <Pokemon />,
      loader: loadApi
    },
    {
      path:`/pokemon/details/:name`,
      element:<Details/>,
      loader: detail,
    },
    {
      path: "/different",
      element: <Different />,
      loader: loadDif
    },
  ]
  }])
return <RouterProvider router={router}/>
}
export default App
