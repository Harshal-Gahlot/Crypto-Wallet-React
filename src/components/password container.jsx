import React, { useState } from "react";

export const Invalid = () => <p id="invalid">Invalid Password</p>

export function PasswordContainer(props) {
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false)
    const checkPassword = (event) => {
        event.preventDefault();
        const localPassword = "code";
        if (password === "") {
            // return;
            props.onCorrectPassword();
        } else {
            setShowError(true);
        }

        // } else if (password === localPassword) {
        //     props.onCorrectPassword();
        //     setShowError(false);
    };

    return (
        <section id="password_container" hidden="true">
            <header>
                <h1>Welcome back!</h1>
                <p>The decentralized web awaits</p>
            </header>
            <form onSubmit={checkPassword}>
                <article>
                    <div id="transition_password">Password</div>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password_input"
                    />
                </article>
                <button className="btn">
                    <span className="btn_copy"></span>Unlock
                </button>
            </form>
            {showError && <Invalid />}
        </section>
    );
};
