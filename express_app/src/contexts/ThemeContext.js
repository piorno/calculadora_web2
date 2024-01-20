import { createContext, useState } from "react";
import { ThemeProvider as ProviderTheme, createTheme } from '@mui/material/styles';
import { colors } from '../styled/app'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const [themeType, setThemeType] = useState('light')

    const theme = createTheme(colors(themeType));

    function handleTheme(dark) {
        if (dark) setThemeType('dark')
        else setThemeType('light')
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            <ProviderTheme theme={theme}>
                {children}
            </ProviderTheme>
        </ThemeContext.Provider>
    )
}