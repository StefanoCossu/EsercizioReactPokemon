import {Outlet} from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import { ContextProvider } from "../Contexts/searched"
export default function Root() {
    return<ContextProvider>
            <Navbar />
            <Outlet />
        </ContextProvider>
}