import React, {useReducer, useContext} from "react"



// /utils/AuthState
const AuthContext = React.createContext({
    isLoggedIn: false,
    displayName: ""
});
// Reducer
// Actions => Login / Logout
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
export const actions = {LOGIN, LOGOUT}
function authReducer(authState, action){
    switch(action.type){
        case LOGIN:
            return {
                isLoggedIn: true,
                // displayName: action.data.displayName,
                // userId: action.data.userId
            }
        case LOGOUT:
            return {
                isLoggedIn: false,
                // displayName: ""
            }
            ;
        default:
            console.log("Unrecognized action", action.type);
            return authState;
    }
}
export function AuthProvider({ value = {
    isLoggedIn: false,
    displayName: ""
}, ...props}){
    const [authState, dispatch] = useReducer(authReducer, value)
    return <AuthContext.Provider 
    value={[authState, dispatch]} {...props}/>
}
export function useAuth(){
    return useContext(AuthContext);
}