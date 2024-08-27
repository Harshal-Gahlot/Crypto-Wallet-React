export default function AccountCards({cards}) {
    return (
        <>
            {cards.map((card) => (
                <ul className="account_card account1">
                    <div key={card[0]} className="account_card_display">
                        <img
                            className="SOL"
                            src={`/assets/icons/${card[1]}.svg`}
                            alt=""
                        />
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
