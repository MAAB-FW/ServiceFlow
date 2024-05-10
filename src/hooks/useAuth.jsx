import { useContext } from "react"
import { AuthContext } from "../routes/AuthProvider/AuthProvider"

const useAuth = () => {
    const authInformation = useContext(AuthContext)
    return authInformation
}

export default useAuth
