import { useState, useEffect, createContext } from "react";

export const Context = createContext();

export function ContextProvider({children}) { 
    const wallet1 = localStorage.getItem("wallet-1") ? JSON.parse(localStorage.getItem("wallet-1")) : {};
    const [cards, setCards] = useState(wallet1["accounts"] || []);

    const currentData = localStorage.getItem("currectData") ? JSON.parse(localStorage.getItem("currectData")) : {};
    const [currID, setCurrID] = useState(currentData["accountID"] = 0);

    useEffect(() => {
        localStorage.setItem("currectData", JSON.stringify({accountID:currID}));
    }, [currID]);

    useEffect(() => {
        localStorage.setItem("wallet-1", JSON.stringify({accounts:cards}));
    },[cards]);
    
    return (
        <Context.Provider value={{currID, setCurrID, cards, setCards, wallet1}}>
            {children}
        </Context.Provider>
    );
}