import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"
import AuthProvider from "./routes/AuthProvider/AuthProvider"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <Toaster position="top-center" reverseOrder={false} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)
