import React, { useState, createContext, useContext } from "react";

import { ContextProvider } from "./context";
import { PasswordContainer } from "./components/password container";
import { AccountList } from "./components/account list";
import { MiddleContainer } from "./components/middle container";
import { NavRight, NavLeft } from "./components/nav";

export const App = () => {
    const [isLocked, setIsLocked] = useState(true);
    const Unlock = () => setIsLocked(false);
    // const Lock = () => setIsLocked(true);

    return (
            
        <ContextProvider >
            
            {isLocked ? (< PasswordContainer onCorrectPassword={Unlock} />) 
            : (<> <main id="main">
                    <NavLeft />
                    <MiddleContainer accountID={1} />
                    <NavRight />
                </main>
                <AccountList /> </>
            )}
        </ContextProvider >
    );
};