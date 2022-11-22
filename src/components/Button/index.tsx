import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import theme from '../../styles/theme';
import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
    children: string;
    onPress: () => void;
    disabled?: boolean;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onPress, disabled, isLoading }) => {
    return (
        <Container
            onPress={onPress}
            disabled={disabled || isLoading}
        >
            {isLoading && (
                <ActivityIndicator color={'#fff'} />
            )}

            {!isLoading && (
                <Text
                    weight={theme.FONTS.GENERAL_SEMI}
                    color={"#fff"}
                >
                    {children}
                </Text>
            )}

        </Container>
    );
}

export default Button;
