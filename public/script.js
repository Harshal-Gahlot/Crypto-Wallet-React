import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { HDNodeWallet } from 'ethers';
// import ethUtil from "ethereumjs-util";
// const ethUtil = require("ethereumjs-util");
class MyWallet{
    constructor(mnemonicByteSize, mnemonic=undefined) {
        this.accountNumber = 0;
        if ( mnemonic !== undefined ) { this.mnemonic = mnemonic; }
        else { this.mnemonic = generateMnemonic(mnemonicByteSize);}
        this.seed = mnemonicToSeedSync(this.mnemonic);
    }
    generateNewAccount(currency="SOL") {
        const cur = this.getCurrencyCode(currency);
        this.path = `m/44'/${cur}'/0'/0'/${this.accountNumber}'`;
        console.log(this.path)
        const derivedSeed = derivePath(this.path, this.seed.toString("hex")).key;
        const privateKeyUint8Array64byte = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

        if (currency == "SOL") {
            const privateKey = bs58.encode(privateKeyUint8Array64byte.subarray(0, 32));
            const publicKey = Keypair.fromSecretKey(privateKeyUint8Array64byte).publicKey.toBase58();
        } else if (currency == "ETH") {
            let wallet = HDNodeWallet.fromPhrase(this.mnemonic, "" ,this.path);
            console.log(`\nprivateKey: ${wallet.privateKey}\npublicKey: ${wallet.publicKey}\naddress: ${wallet.address}`);
            const hdNode = HDNodeWallet.fromSeed(this.seed);
            console.log(`\nhdNode.privateKey: ${hdNode.privateKey}\nhdNode.publicKey: ${hdNode.publicKey}\nhdNode.address: ${hdNode.address}`);
            const child = hdNode.derivePath(this.path);
            console.log(`\nchild.privateKey: ${child.privateKey}\nchild.publicKey: ${child.publicKey}\nchild.address: ${child.address}`);
        }
        this.accountNumber += 1
        // return {privateKey, publicKey};
    }
    getCurrencyCode(currency) {
        const currenciesCodeSet = {
            "SOL": 501,
            "ETH": 60,
            "BTC": 0
        };
        return currenciesCodeSet[currency];
    }
}






// const UserWallet = new MyWallet(128, "nut music stem shop company dignity cloud warfare dream deputy food wedding");
function addAccount(currency) {
    ACCOUNT_COUNT++;
    const account = document.createElement("ul");
    account.classList = `account_card account${ACCOUNT_COUNT}`;
    account.innerHTML = `<div class="account_card_display">
                    <img class="${currency}" src="/assets/icons/${currency}.svg" alt="" />
                    <p>${currency}</p>
                </div>
                <div class="account_card_info">
                    <p>5.0 ${currency}</p>
                </div>`;
    addAccountContainer.previousElementSibling.before(account);
    // const pubKey = getTrimedKey()
    // main.innerHTML = `
    // <!--send request to server of ammount in a publicKey-->
    // <h1 id="ammount">${getCryptoCurrency(pubKey)}</h1>
    // <p>Public key</p>
    // <div>
    // <!--Get public key from DB and mnemonic-->

    //     <p>${pubKey}</p>
    //     <img src="" alt="" />
    // </div>`
}

function getCryptoCurrency(pubKey) {
    const CONST_POWER = 100000000000000000;
    let crypto = 500000000000000;
    let currency = "ETH";
    return `${crypto / CONST_POWER} ${currency}`;
}

function getTrimedKey() {
    let key = "0xe89cD449b97aF83E0419587b4fd4dCCF7e42916F";
    return key.slice(0, 4) + "..." + key.slice(38);
}

ACCOUNT_COUNT = 1;

const accountManager = document.getElementById("account_manager");
const passwordContainer = document.getElementById("password_container");
const unlockBtn = document.getElementById("unlock");

const main = document.getElementById("main");
const addAccountContainer = document.getElementById("add_account_container");
const addAccountDiv = document.querySelectorAll(".add_account_div");

addAccountDiv.forEach((ele) => {
    ele.addEventListener("click", () => {
        console.log(ele.lastElementChild.innerHTML);
        addAccount(ele.lastElementChild.innerHTML);
    });
});
