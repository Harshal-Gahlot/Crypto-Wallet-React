// Ignore this file, it is re-written in small components.

// import { useState, useEffect } from "react";
// import { NavRight, NavLeft } from "./nav";

// export default function DisplayAccountContainer() {
//     const storage = localStorage.getItem("wallet-1") ? JSON.parse(localStorage.getItem("wallet-1")) : {};
//     const [cards, setCards] = useState(storage["accounts"] || []);
//     const currentData = localStorage.getItem("currectData") ? JSON.parse(localStorage.getItem("currectData")) : {};
//     const [currID, setCurrID] = useState((currentData["accountID"]));
//     let accountNumber = cards.length

//     useEffect(() => {
//         localStorage.setItem("wallet-1", JSON.stringify({ accounts: cards }));
//     }, [cards]);

//     useEffect(() => {
//         localStorage.setItem("currectData", JSON.stringify({ accountID: currID }));
//     }, [currID]);

//     function AddAccount(newWalletInfo) {
//         setCards([...cards, newWalletInfo]);
//         accountNumber += 1
//     }

//     return (
//         <>
//             <main id="main">
//                 <NavLeft />

//                 <article id="main_content">
//                     <header>
//                         <h4>Add Wallet</h4>
//                         <svg width="20" fill="#0D7377" viewBox="0 0 96 96">
//                             <title />
//                             <path d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z" />
//                         </svg>
//                     </header>
//                     <div id="pubkey_copy">
//                         <p>{cards[currID][4]}</p>
//                         <svg width="12" height="15" viewBox="0 0 12 15">
//                             <path
//                                 fill="currentColor"
//                                 d="M4.23529 12C3.84706 12 3.51471 11.8531 3.23824 11.5594C2.96176 11.2656 2.82353 10.9125 2.82353 10.5V1.5C2.82353 1.0875 2.96176 0.734375 3.23824 0.440625C3.51471 0.146875 3.84706 0 4.23529 0H10.5882C10.9765 0 11.3088 0.146875 11.5853 0.440625C11.8618 0.734375 12 1.0875 12 1.5V10.5C12 10.9125 11.8618 11.2656 11.5853 11.5594C11.3088 11.8531 10.9765 12 10.5882 12H4.23529ZM4.23529 10.5H10.5882V1.5H4.23529V10.5ZM1.41176 15C1.02353 15 0.691177 14.8531 0.414706 14.5594C0.138235 14.2656 0 13.9125 0 13.5V3H1.41176V13.5H9.17647V15H1.41176Z"
//                                 // fill="white"
//                             />
//                         </svg>
//                     </div>

//                     <section id="ammount_display">
//                         <h1 id="ammount_crypto">{cards[currID][2]}</h1>
//                         <h4 id="ammount_USDC">{`$ ${130 * cards[currID][2]}`}</h4>
//                     </section>
//                 </article>

//                 <NavRight />
//             </main>

//             <li id="account_manager">
//                 {cards.map((card) => (
//                     <ul key={card[0]} onClick={() => setCurrID(card[0])} className="account_card account1" >
//                         <div className="account_card_display">
//                             <img className="SOL"src={`/assets/icons/${card[1]}.svg`} />
//                             <p>{card[1]}</p>
//                         </div>
//                         <div className="account_card_info">
//                             <p>{card[2] + " " + card[1]} </p>
//                         </div>
//                     </ul>
//                 ))}

//                 <ul id="add_account_heading">Add Account</ul>

//                 <ul id="add_account_container" className="">
//                     <div onClick={() => AddAccount([ accountNumber, "SOL", 0.0, "private key", "public key" ]) }
//                         className="add_account_div">
//                         <img src="/assets/icons/plus.svg" />
//                         <p className="currencies">SOL</p>
//                     </div>
//                     <div onClick={() => AddAccount([ accountNumber, "ETH", 0.0, "private key", "public key" ]) }
//                         className="add_account_div">
//                         <img src="/assets/icons/plus.svg" />
//                         <p className="currencies">ETH</p>
//                     </div>
//                 </ul>
//             </li>
//         </>
//     );
// }
// // {"accounts":[[0,"SOL",0.2,"private key","public key"],[1,"ETH",4,"private key","public key"]]}