import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

export const Container = styled.SafeAreaView`
    margin-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
    flex: 1;
    background: #fafafa;
`;

export const CategoriesContainer = styled.View`
    height: 73px;
    margin-top: 34px;
`;

export const MenuContainer = styled.View`
    flex: 1;
`;

export const Footer = styled.View`
    min-height: 110px;
    background: #fff;
`;

export const FooterContainer = styled.SafeAreaView`

`;
