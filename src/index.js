import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { PasswordContainer } from "./html components/password container";
import { AccountList } from "./html components/account list";
import { MiddleContainer } from "./html components/main container/middle container";
import { NavRight, NavLeft } from "./html components/main container/nav";

const App = () => {
    return (
        <>
            < PasswordContainer />

            <main id="main">
                < NavLeft />
                < MiddleContainer />
                < NavRight />
            </main>

            < AccountList />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
