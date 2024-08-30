import { useContext } from "react";
import { Context } from "../context";

export default function AccountCards() {
    const {setCurrID, cards} = useContext(Context);

    return (
        <>
            {cards.map((card) => (
                <ul
                    key={card[0]} onClick={() => setCurrID(card[0])}
                    className="account_card account1">
                    <div className="account_card_display">
                        <img className="SOL" src={`/assets/icons/${card[1]}.svg`} />
                        <p>{card[1]}</p>
                    </div>
                    <div className="account_card_info">
                        <p>{card[2] + " " + card[1]} </p>
                    </div>
                </ul>
            ))}
        </>
    );
}