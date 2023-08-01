import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
export default function Card(el) {
    const [category,setCategory]=useState("");
    useEffect(()=>{
        fetch(el.pokemon.url).then((r)=>r.json()).then((r)=>{
            setCategory(r)
        })
    },[]);
    
    return(
        <div className="card my-5 shadow">
            <img src={category.sprites ? category.sprites.front_default :""} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{el.pokemon.name[0].toUpperCase() + el.pokemon.name.slice(1)}</h5>
                <p className="card-text">Esperienza base: {category.base_experience}</p>
                <Link to={`/details/${el.pokemon.name}`} className="btn btn-primary">Dettagli</Link>
            </div>
        </div>
    )
}
