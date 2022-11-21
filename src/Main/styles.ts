import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

export const Container = styled.SafeAreaView`
    margin-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
`;

export const CategoriesContainer = styled.View`
    height: 73px;
    margin-top: 34px;
    background: tomato;
`;

export const MenuContainer = styled.View``;

export const Footer = styled.View``;
