import AccountCards from "./account cards.jsx";
import { useContext } from "react";
import { Context } from "../context";
import Wallet from "./generate wallet class.js";

export function AccountList() {
    const {cards, setCards, MyWallet} = useContext(Context);
    const style = (cards.length === 0) ? {marginTop: "0px"} : {}

    function addAccount(currency) {
        // const {privateKey, publicKey} = MyWallet.generateNewAccount(currency)
        setCards(prevCards => [...prevCards, [
            prevCards.length, // We don't have to add 1 to the length because the array are 0 indexed.
            currency, 0, "private key", "public key"]])
    }
    
    return (
        <li id="account_manager">
            <AccountCards />

            <ul style={style} id="add_account_heading">Add Account</ul>

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
