import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import { Context } from "../../Contexts/searched"
import { useContext } from "react"
import styles from "./Card.module.css"

export default function Card(el) {

    const {prefered} = useContext(Context)

    const [category,setCategory]=useState("");
    useEffect(()=>{
        fetch(el.pokemon.url).then((r)=>r.json()).then((r)=>{
            setCategory(r)
        })
    },[]);

    let pokeId = parseInt(el.pokemon.url.slice(34, (el.pokemon.url).length -1 ))
    

    return(
        <div className={`card my-5 shadow ${prefered.includes(pokeId) ? `${styles.prefered}` : "" } `}>
            <img src={category.sprites ? category.sprites.front_default :""} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{el.pokemon.name[0].toUpperCase() + el.pokemon.name.slice(1)}</h5>
                <p className="card-text">Esperienza base: {category.base_experience}</p>
                <Link to={`/pokemon/details/${el.pokemon.name}`} className="btn btn-primary">Dettagli</Link>
            </div>
        </div>
    )
}
