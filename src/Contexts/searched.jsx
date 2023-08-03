import { createContext,useState } from "react";

export const Context = createContext()

export function ContextProvider(props) {
    const [searched, setSearched]=useState("");
    
    const researched = (props) =>{
        setSearched(props)
    }
    
    return <Context.Provider value={{searched , researched}}>{props.children}</Context.Provider>
}