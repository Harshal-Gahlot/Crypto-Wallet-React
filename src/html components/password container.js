export const PasswordContainer = () => {
    return (
        <section id="password_container" hidden="true">
            <header>
                <h1>Welcome back!</h1>
                <p>The decentralized web awaits</p>
            </header>
            <form>
                <article>
                    <div id="transition_password">Password</div>
                    <input type="password" name="" id="password_input" />
                </article>
                <button id="unlock">
                    <span className="btn_copy"></span>Unlock
                </button>
            </form>
        </section>
    )
}

