import React, { useState } from "react";

import { PasswordContainer } from "./html components/password container";
import { AccountList } from "./html components/account list";
import { MiddleContainer } from "./html components/main container/middle container";
import { NavRight, NavLeft } from "./html components/main container/nav";

export const App = () => {
    const [isLocked, setIsLocked] = useState(true);
    const Unlock = () => setIsLocked(false);
    // const Lock = () => setIsLocked(true);

    return (
        <> {
            isLocked ? (< PasswordContainer onCorrectPassword={Unlock} />)
            : (<>
                <main id="main">
                    <NavLeft />
                    <MiddleContainer />
                    <NavRight />
                </main>
                <AccountList /> </> 
            )
        } </>
    );
};