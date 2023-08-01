import { Suspense } from "react"
import {defer, useLoaderData, Await} from "react-router-dom"
export default function Details(){
    
    const detail = useLoaderData()
    return(
        <div className="container mt-5">
            <div className="row">
                <Suspense fallback={<p>In cariacamento</p>}>
                    <Await resolve={detail}>
                        {
                            detail => 
                            <>
                            <div className="col-6 mt-5">
                                <ul>
                                    <li className="d-flex justify-content-between">
                                        Color: <span>{detail.color.name[0].toUpperCase() + detail.color.name.slice(1)}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        Capture Rate: <span>{detail.capture_rate}</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        Legendary: <span>{detail.is_legendary ? "Yes":"No"}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 mt-5 d-flex justify-content-center">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detail.id}.png`} alt="" />
                            </div>
                            </>
                        }
                    </Await>
                </Suspense>            
            </div>
        </div>
    )
}
export const perk = async(el)=>{
    return await fetch("https://pokeapi.co/api/v2/pokemon-species/"+el.name).then((r)=>r.json());
}
export const detail = async({params})=>{
    const det = await perk(params)
    return defer(det)
}