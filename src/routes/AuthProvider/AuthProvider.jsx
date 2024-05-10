import React, { createContext } from "react"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const AuthData = {}
    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
}

export default AuthProvider
