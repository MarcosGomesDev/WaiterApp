import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import COLORS from '../src/styles/theme';
import Main from './Main';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={{COLORS}}>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Main />
        </ThemeProvider>
    );
}

export default App;
