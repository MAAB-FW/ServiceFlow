import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom"

const secureAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const useSecureAxios = () => {
    const { logoutUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        secureAxios.interceptors.response.use(
            (res) => {
                console.log("passed")
                return res
            },
            (err) => {
                if (err.response.status === 401 || err.response.status === 403) {
                    logoutUser()
                        .then(() => {
                            navigate("/login")
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                    return console.log("logout user")
                }
            },
        )
    }, [logoutUser, navigate])
    return secureAxios
}

export default useSecureAxios
