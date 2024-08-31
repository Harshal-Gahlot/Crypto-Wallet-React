import { useState, useEffect, createContext } from "react";
export const Context = createContext();

export function ContextProvider({ children }) {
    const walletExists = localStorage.getItem("wallet-1") !== null;

    const [walletScreen, setWalletScreen] = useState(walletExists ? 'exist' : 'create');

    const [wallet1, setWallet1] = useState(() => {
        const storedWallet = localStorage.getItem("wallet-1");
        return storedWallet ? JSON.parse(storedWallet) : null;
    });
    const [cards, setCards] = useState(() => {
        return wallet1 && wallet1["accounts"] ? wallet1["accounts"] : [];
    });

    const [currID, setCurrID] = useState(() => {
        const currentData = localStorage.getItem("currectData");
        return currentData ? JSON.parse(currentData)["accountID"] : 0;
    });

    const [MyWallet, setMyWallet] = useState(null);

    useEffect(() => {
        localStorage.setItem("currectData", JSON.stringify({ accountID: currID }));
    }, [currID]);

    useEffect(() => {
        if (wallet1 !== null) {
            const updatedWallet = { ...wallet1, accounts: cards };
            localStorage.setItem("wallet-1", JSON.stringify(updatedWallet));
            setWallet1(updatedWallet);
        }
    }, [cards]);

    return (
        <Context.Provider value={{ walletScreen, setWalletScreen, currID, setCurrID, cards, setCards, wallet1, MyWallet, setMyWallet }}>
            {children}
        </Context.Provider>
    );
}
