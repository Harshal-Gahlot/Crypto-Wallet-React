import AccountCards from "./main container/account cards.jsx";
import { useState, useEffect } from "react";

export function AccountList() {
    const storage = localStorage.getItem("wallet-1") ? JSON.parse(localStorage.getItem("wallet-1")) : {};
    console.log("storage: ", storage)
    const [cards, setCards] = useState(storage["accounts"] || []);

    function AddAccount(newWalletInfo) {
        setCards([...cards, newWalletInfo]);
        console.log("cards: ", cards)
    }

    useEffect(() => {
        console.log("useEffect")
        localStorage.setItem("wallet-1", JSON.stringify({accounts:cards}))
    }, [cards])
    
    return (
        <li id="account_manager">
            <AccountCards cards={cards} />

            <ul id="add_account_heading">Add Account</ul>

            <ul id="add_account_container" className="">
                <div onClick={() => AddAccount([2, "SOL", 0.2, "private key", "public key"])}
                className="add_account_div">
                    <img src="/assets/icons/plus.svg" alt="" />
                    <p className="currencies">SOL</p>
                </div>
                <div onClick={() => AddAccount([3, "ETH",4.0, "private key", "public key"])}
                className="add_account_div">
                    <img src="/assets/icons/plus.svg" alt="" />
                    <p className="currencies">ETH</p>
                </div>
            </ul>
        </li>
    );
}
