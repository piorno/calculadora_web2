import { createContext, useState } from "react";
import Loader from "../components/generic/loader";
import Toast from "../components/generic/toast";


export const GlobalAlertContext = createContext({})

export function GlobalAlertProvider({ children }) {
    const [toast, setToast] = useState({ open: false, type: 'success', message: '' })
    const [loading, setLoading] = useState(false)

    function handleToast(open, type, message) {
        setToast({ open, type, message })
    }

    function handleLoading(loading){
        setLoading(loading)
    }

    return (
        <GlobalAlertContext.Provider value={{ handleToast, handleLoading }}>
            {children}
            <Toast {...toast} handleClose={() => setToast({ open: false, type: toast.type, message: '' })} />
            <Loader open={loading} />
        </GlobalAlertContext.Provider>
    )
}