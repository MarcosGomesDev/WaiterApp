import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';
import TextCustom from '../../components/TextCustom';

// import { Container } from './styles';

const Home: React.FC = () => {
    const {COLORS, FONTS} = useTheme()
    return (
        <View style={{paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}>
            <TextCustom
                weight={FONTS.GENERAL_SEMI}
                color={COLORS.ATTENTION}
                size={24}
            >
                Ola Mundo
            </TextCustom>
        </View>
    );
}

export default Home;
