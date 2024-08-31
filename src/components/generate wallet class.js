import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { HDNodeWallet } from 'ethers';
// import ethUtil from "ethereumjs-util";

export default class Wallet {
    constructor(mnemonicByteSize = 128, mnemonic = undefined) {
        this.accountNumber = 0;
        if (mnemonic !== undefined) { this.mnemonic = mnemonic; }
        else { this.mnemonic = generateMnemonic(mnemonicByteSize); }
        this.seed = mnemonicToSeedSync(this.mnemonic);
    }
    
    generateNewAccount(currency = "SOL") {
        const cur = this.getCurrencyCode(currency);
        this.path = `m/44'/${cur}'/${this.accountNumber}'/0'`;
        console.log(this.path)
        const derivedSeed = derivePath(this.path, this.seed.toString("hex")).key;
        const privateKeyUint8Array64byte = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        let privateKey, publicKey;
        if (currency == "SOL") {
            privateKey = bs58.encode(privateKeyUint8Array64byte.subarray(0, 32));
            publicKey = Keypair.fromSecretKey(privateKeyUint8Array64byte).publicKey.toBase58();
        } else if (currency == "ETH") {
            // const wallet = HDNodeWallet.fromPhrase(this.mnemonic, "", this.path); //another way
            const hdNode = HDNodeWallet.fromSeed(this.seed);
            const child = hdNode.derivePath(this.path);
            privateKey= child.privateKey
            publicKey = child.address;
        }
        this.accountNumber += 1
        return {privateKey, publicKey};
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

export function getRandomMnemonic() {
    return generateMnemonic(128);
}