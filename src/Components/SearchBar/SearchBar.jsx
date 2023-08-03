import {  NavLink } from "react-router-dom"
import { Context } from "../../Contexts/searched"
import { useContext } from "react"

export default function SearchBar() {

const {searched, researched}=useContext(Context)

    return <>
    <NavLink to="/pokemons" className={({isActive})=>(isActive ? "col-6 d-flex justify-content-center align-items-center my-5":"d-none")}>
    <input type="text" placeholder="Scrivi nome Pokemon" onChange={(e)=>researched(e.target.value)} value={searched}/>
    </NavLink>
    </>
}