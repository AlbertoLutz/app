import {ReactElement, useCallback} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import {BrowserRouter} from 'react-router-dom'
import { Header } from './components/Header';

import GlobalStyle from './global';
import {Routes} from './routes';

import light from './global/Themes/light'
import dark from './global/Themes/dark'
import { usePersistedStates } from './usePersistedStates';

function App(): ReactElement {

    const [theme, setTheme] = usePersistedStates<DefaultTheme>('theme', light)

    const toggleTheme = useCallback(() => {
        setTheme(theme.title === 'light' ? dark : light)
    }, [setTheme, theme.title])

    return(
        <ThemeProvider theme={theme}>
        <GlobalStyle />
             <BrowserRouter>
             <Header toggleTheme={toggleTheme} title={theme.title} primary={theme.colors.primary} secundary={theme.colors.secundary}/>
             <Routes />
             </BrowserRouter>
             </ThemeProvider>
    )
}

export default App;