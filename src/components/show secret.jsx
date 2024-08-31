import Wallet from "./generate wallet class.js";
import { useContext } from "react";
import { Context } from "../context";

export function ShowSecret(props) {
    const { setWalletScreen, MyWallet, setMyWallet } = useContext(Context);
    const mnemonicOrTrue = props.showSecret
    if (mnemonicOrTrue === true) { setMyWallet(x => new Wallet()) } 
    else { setMyWallet(x => new Wallet(128, mnemonicOrTrue)) }
    
    const wordsArray = MyWallet.mnemonic.split(" ");

    localStorage.setItem('wallet-1', JSON.stringify({mnemonic: MyWallet.mnemonic}));

	return (
        <div id='show_secret_container'>
            <h1>Secret Phrase</h1>
            <p>Keep it Secret, even from your alter ego and your kids.</p>

            <li id="mnemonic_words">
                {wordsArray.map((word, index) => (
                <ol className="mnemonic_word" key={index}>
                    <span className="mnemonicIndex" >{index+1}. </span>
                    {word}
                </ol>
                ))}
            </li>
            <button onClick={setWalletScreen('exist')} className="btn">
                <span className="btn_copy"></span>
                Continue
            </button>
        </div>
  );
}