import { createContext, useContext, useEffect, useState } from "react";
import { GlobalAlertContext } from "./GlobalAlertContext";
import { api } from '../services/api'

export const CalcContext = createContext({})

export function CalcProvider({ children }) {
	const { handleToast, handleLoading } = useContext(GlobalAlertContext)
	const [result, setResult] = useState({ error: false, value: '', errorText: 'Error' })

	async function calc(field1, field2, conta) {
		handleLoading(true)
		try {
			const { data } = await api({ method: 'put', url: `/calc/${conta}`, data: { field1: field1.value, field2: field2.value } })
			console.log(data);
			setResult({ error: false, value: data.result, errorText: 'Error' })
			
		} catch (err) {
			handleToast(true, err.response.data?.toast, err.response.data?.message)
		}
		handleLoading(false)
	}

	return (
		<CalcContext.Provider value={{ calc, result }}>
			{children}
		</CalcContext.Provider>
	)
}