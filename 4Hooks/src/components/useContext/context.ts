import { createContext, useContext } from "react";
import { User } from "../useContext";

export const DashboardContext = createContext<User | undefined>(undefined);

// Custom hook to handle the logic
export function useUserContext(){
    const user = useContext(DashboardContext);

    if(user === undefined){
        throw new Error("useUserContext must be used with a DashboardContext")
    }

    return user;
}