import { createContext, useContext, useEffect, useState } from "react";
import { GlobalAlertContext } from "./GlobalAlertContext";
import { api } from '../services/api'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
	const navigate = useNavigate()
	const { handleToast, handleLoading } = useContext(GlobalAlertContext)
	const [user, setUser] = useState({})
	const isAuthenticated = !!user
	

	function signOut() {
		Cookies.remove('calculadora.token')
		navigate('/')
	}

	async function signIn(email) {
		handleLoading(true)
		try {
			const { data } = await api({ method: 'post', url: '/auth/login', data: { email: email.value } })

			const  token  = data.token
			const userResponse = data.user

			Cookies.set('calculadora.token', token, { expires: 7 })

			setUser(userResponse)

			api.defaults.headers['Authorization'] = `Bearer ${token}`

			handleToast(true, data?.toast, data?.message)

			navigate('/home')
		} catch (err) {
			if (err.response.data?.error === 'email') {
				email.error = true;
				email.errorText = err.response.data.message
			} 
			handleToast(true, err.response.data?.toast, err.response.data?.message)
		}
		handleLoading(false)
		return { email }
	}

	return (
		<AuthContext.Provider value={{ signIn, signOut, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	)
}