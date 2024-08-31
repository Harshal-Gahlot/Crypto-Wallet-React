import React, { useState, useContext } from "react";
import { ContextProvider, Context } from "./context";
import { PasswordContainer } from "./components/password container";
import { AccountList } from "./components/account list";
import { MiddleContainer } from "./components/middle container";
import { NavRight, NavLeft } from "./components/nav";
import { DisplyWalletCreation } from "./components/display wallet creation";

export const App = () => {
    const [isLocked, setIsLocked] = useState(true);
    const Unlock = () => setIsLocked(false);
    // const Lock = () => setIsLocked(true);

    

    return (
            
        < ContextProvider >
            { isLocked ? (< PasswordContainer onCorrectPassword={Unlock} />) 
            : < AfterPassword /> }
        </ ContextProvider >
    );
};

const AfterPassword = () => {
    const { walletScreen } = useContext(Context);

    return (
        <>
            {walletScreen == "exist" ? (
                <>
                    <main id="main">
                        <NavLeft />
                        <MiddleContainer />
                        <NavRight />
                    </main>
                    <AccountList />
                </>
            ) : (
                <DisplyWalletCreation />
            )}
        </>
    );
};