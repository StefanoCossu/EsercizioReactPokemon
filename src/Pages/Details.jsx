import { Suspense } from "react"
import {defer, useLoaderData, Await} from "react-router-dom"
import { Context } from "../Contexts/searched"
import { useContext } from "react"
export default function Details(){
   
    const {prefered,togglePrefered} = useContext(Context)
    
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
                                <button className="btn btn-primary" onClick={() =>togglePrefered(detail.id)}>TogglePrefered</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={prefered.includes(detail.id) ? "#f00":"#ddd"} className="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
                                </svg>
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