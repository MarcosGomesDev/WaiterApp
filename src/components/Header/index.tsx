import React from 'react';
import theme from '../../styles/theme';
import { Text } from '../Text';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
            <Text
                size={24}
                weight={theme.FONTS.GENERAL_BOLD}
            >
                WAITER
                <Text size={24}>
                    APP
                </Text>
            </Text>
        </Container>
    );
}

export default Header;
