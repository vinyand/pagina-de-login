import { useContext } from "react";
import { Login } from "../../Pages/Login";
import { AuthContext } from './AuthContexts';

export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Login/>;
    }
    
    return children;
}