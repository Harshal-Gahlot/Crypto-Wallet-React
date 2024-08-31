import { useState } from "react";
import { ShowSecret } from "./show secret";

export function DisplyWalletCreation() {
    const [inputValue, setInputValue] = useState('');
    const [showSecret, setShowSecret] = useState(false);

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleContinue = () => {
        setShowSecret(false);  // Reset the showSecret state
        // onWalletCreated();     // Call the parent function to navigate back to the wallet screen
    };
    
    return (
        !showSecret ? 
            <div id="display_wallet_creation_container">
                <h1>Create Wallet</h1>
                <p>Click the below button to create fresh secret phrase</p>
                <button id="show_secret_phrase_btn" onClick={() => setShowSecret(true)}>
                    <span id="show_secret_phrase_btn_copy">Show Secret Phrase</span>
                    Show Secret Phrase
                </button>

                <p>Or import a secret phrase</p>
                <input id="get_secret_input" value={inputValue} onChange={handleInputValueChange} type="text" />
                <button onClick={() => setShowSecret(inputValue)} className="btn">
                    <span className="btn_copy"></span>
                    IMPORT
                </button>
            </div>
        : < ShowSecret showSecret={showSecret}/>
    );
}

