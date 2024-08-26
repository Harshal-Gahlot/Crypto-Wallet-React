export function AccountList() {
    return (
        <li id="account_manager">
            <ul className="account_card account1">
                <div className="account_card_display">
                    <img className="SOL" src="/assets/icons/SOL.svg" alt="" />
                    <p>SOL</p>
                </div>
                <div className="account_card_info">
                    <p>5.0 SOL</p>
                </div>
            </ul>

            <ul id="add_account_heading">Add Account</ul>

            <ul id="add_account_container" className="">
                <div className="add_account_div">
                    <img src="/assets/icons/plus.svg" alt="" />
                    <p className="currencies">SOL</p>
                </div>
                <div className="add_account_div">
                    <img src="/assets/icons/plus.svg" alt="" />
                    <p className="currencies">ETH</p>
                </div>
            </ul>
        </li>
    )
}