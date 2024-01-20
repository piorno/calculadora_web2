import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/routes';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import { AuthProvider } from './contexts/AuthContext';
import { CalcProvider } from './contexts/CalcContext';
import { GlobalAlertProvider } from './contexts/GlobalAlertContext';
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<GlobalAlertProvider>
					<AuthProvider>
						<CalcProvider>
							<CssBaseline />
							<RoutesApp />
						</CalcProvider>
					</AuthProvider>
				</GlobalAlertProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
