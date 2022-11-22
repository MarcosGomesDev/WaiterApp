import React from 'react';
import { StatusBar } from 'react-native';

interface StatusBarProps {
    style?: 'default' | 'light-content' | 'dark-content';
    background?: string;
}

const StatusBarCustom: React.FC<StatusBarProps> = ({style, background}) => {
    return (
        <>
        <StatusBar
            barStyle={style}
            backgroundColor={background}
        />
        </>
    );
}

export default StatusBarCustom;
