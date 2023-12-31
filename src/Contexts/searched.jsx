import { createContext,useEffect,useState } from "react";


export const Context = createContext()

export function ContextProvider(props) {
    // Salva la localStorage preesistente se c'è o non è vuota per rimandarlo allo useState che altrimenti azzererebbe all'inizio quindi ad ogni refresh
    let saved = localStorage.getItem("prefered") ? (localStorage.getItem("prefered").length > 0 ? localStorage.getItem("prefered") : null) : null
    
    const [searched, setSearched] = useState("");
    const [prefered,setPrefered] = useState(saved ? JSON.parse(saved) : []);

    // controllare se già presente qualcosa nel local storage
    useEffect(()=>{
        if (localStorage.getItem("prefered")) { 
            setPrefered(()=>JSON.parse(localStorage.getItem("prefered")))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("prefered", JSON.stringify(prefered))
        
    },[prefered])
    const togglePrefered = (id) => {

        // console.log(JSON.stringify(prefered));
        // usiamo find/include/filter per vedere se l'id è nella lista dei favoriti

        const isInArray = prefered.findIndex( el => el === id)
        
        if(isInArray === -1){
            setPrefered((prev)=>[...prev,id])
        }else{
            setPrefered(prev => prev.toSpliced( isInArray, 1))
            
        }
        localStorage.setItem("prefered", JSON.stringify(prefered))

        // se non c'è array.push, setPrefered((prev)=>[...prev,id])
        // se c'è setPrefered(prev => prev.toSpliced(indice che avrò dal punto 1,1)) 
        
        // Prima di andarmene local storage.setItem("prefered",preferd.toString/JSONS)
        
    }
    
    
    const researched = (props) =>{
        setSearched(props)
    }
    
    return <Context.Provider value={{searched , researched, togglePrefered, prefered}}>{props.children}</Context.Provider>
}