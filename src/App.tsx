import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import COLORS from '../src/styles/theme';
import StatusBarCustom from './components/StatusBarCustom';
import Main from './Main';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={{ COLORS }}>
            <StatusBarCustom
                style='light-content'
                background='transparent'
            />
            <Main />
        </ThemeProvider>
    );
}

export default App;
