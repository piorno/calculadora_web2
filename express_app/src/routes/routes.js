import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Cookies from 'js-cookie'

import Home from '../pages/home'
import SignIn from '../pages/signin'
import Main from '../components/generic/main'

export default function RoutesApp() {

    const token = Cookies.get('calculadora.token')
    const { isAuthenticated, signOut } = useContext(AuthContext)

    useEffect(() => {
        if (!isAuthenticated && !token) signOut()
    }, [isAuthenticated])

    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            {isAuthenticated && token ? (
                <>
                <Route path='/home' element={
                        <Home />
                } />
                </>
            ) : null} 
            <Route path='*' element={<SignIn />} />
        </Routes>
    )
}