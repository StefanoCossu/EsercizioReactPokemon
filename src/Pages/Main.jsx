import Card from "../Components/Card/Card"
import {useLoaderData} from "react-router-dom"
import {useState } from "react"
export default function Main(){

    const [searched, setSearched]=useState("");

    let data = useLoaderData()
   
    return <div className='container mt-5'>
        <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center my-5">
                <input type="text" onChange={(e)=>setSearched(e.target.value)} value={searched}/>
                <p>{searched}</p>
            </div>
        {data &&(
            data.results.map((el)=>{
            return  <div className={`col-12 col-md-4 ${searched == "" ? "d-block" : el.name.includes(searched.toLowerCase()) ? "d-block" : "d-none" }`} key={el.name}>
                <Card pokemon={el}/>
             </div>

            })
        )}
        </div>
    </div>
    
}

export async function loadApi(){
    const data = await fetch(' https://pokeapi.co/api/v2/pokemon').then((r)=>r.json());
    return data
}
