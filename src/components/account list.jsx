import AccountCards from "./account cards.jsx";
import { useContext } from "react";
import { Context } from "../context";

export function AccountList() {
    const {setCards} = useContext(Context);
    
    function addAccount(currency) {
        setCards(prevCards => [...prevCards, [
            prevCards.length, // We don't have to add 1 to the length because the first array are 0 indexed.
            currency, 0.84, "private key", "public key"]])
    }
    
    return (
        <li id="account_manager">
            <AccountCards />

            <ul id="add_account_heading">Add Account</ul>

            <ul id="add_account_container" >
            
                <div onClick={() => addAccount('SOL')} className="add_account_div">
                    <img src="/assets/icons/plus.svg" />
                    <p className="currencies">SOL</p>
                </div>

                <div onClick={() => addAccount('ETH')} className="add_account_div">
                    <img src="/assets/icons/plus.svg" />
                    <p className="currencies">ETH</p>
                </div>

            </ul>
        </li>
    );
}
