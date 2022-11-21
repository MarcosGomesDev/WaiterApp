import styled from 'styled-components/native';
import theme from '../styles/theme';

const REGULAR = theme.FONTS.GENERAL_REGULAR;

interface TextProps {
    weight?: string;
    color?: string;
    size?: number;
    opacity?: number;
}

export const Text = styled.Text<TextProps>`
    color: ${({color}: any) => color || '#333'};
    font-size: ${({size}: any) => size ? `${size}px` : '16px'};
    font-family: ${({weight}: any) => weight ? `${weight}` : `${REGULAR}`};
    opacity: ${({opacity}: any) => opacity || 1};
    margin-top: 4px;
`;
