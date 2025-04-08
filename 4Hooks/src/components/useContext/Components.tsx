import { useUserContext } from "./context";

interface SidebarProps {}

export function Sidebar({}: SidebarProps){
    const user = useUserContext();

    return (
        <div>
            <div>{user.name}</div>
            <div>LogIn Status: {user.isLogin}</div>
        </div>
    );
}

interface ProfileProps {}

export function Profile({}: ProfileProps){
    const user = useUserContext();

    return ( 
        <div>{user.name}</div>
    )
}