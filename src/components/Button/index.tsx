import React from 'react';
import { View } from 'react-native';
import theme from '../../styles/theme';
import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
    children: string;
    onPress: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, onPress, disabled}) => {
    return (
        <Container
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                weight={theme.FONTS.GENERAL_SEMI}
                color={"#fff"}
            >
                {children}
            </Text>
        </Container>
    );
}

export default Button;
