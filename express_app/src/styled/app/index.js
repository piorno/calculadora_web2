export const colors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light') ?
            {
                primary: {
                    light: '#eceff1',
                    main: '#3f50b5',
                    dark: '#002884',
                    contrastText: '#fff',
                },
                red: {
                    error: '#d50000'
                },
                blue: {
                    900: '#0d47a1',
                    50: '#e3f2fd'
                }
            }
            : {
                blue: {
                    900: '#90caf9',
                    50: '#424242'
                },
                red: {
                    error: '#f44336'
                },
            }
    },
})