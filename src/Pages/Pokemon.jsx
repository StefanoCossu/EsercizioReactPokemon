import Card from "../Components/Card/Card"
import {useLoaderData} from "react-router-dom"
import { useContext } from "react"
import { Context } from "../Contexts/searched"
export default function Pokemon(){

    const {searched}=useContext(Context)

    let data = useLoaderData()
   
    return <div className='container mt-5'>
        <div className="row">
        {data &&(
            data.results.map((el)=>{
            return  <div className={`col-12 col-md-4 ${searched === "" ? "d-block" : el.name.includes(searched.toLowerCase()) ? "d-block" : "d-none" }`} key={el.name}>
                <Card pokemon={el}/>
             </div>

            })
        )}
        </div>
    </div>
    
}

export async function loadApi(){
    const data = await fetch(' https://pokeapi.co/api/v2/pokemon/?limit=60').then((r)=>r.json());
    return data
}
