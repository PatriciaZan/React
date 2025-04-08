import { useState } from "react";

import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

export interface User {
    isLogin: boolean;
    name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps){
    const [user]= useState<User>({
        isLogin: true,
        name: 'NameUser',
    });

    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}