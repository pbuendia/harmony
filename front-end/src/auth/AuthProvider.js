import React, { useEffect, useState } from "react"
import app from "./FireBaseApp.js"

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    //const auth = app.auth()
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value = {{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
