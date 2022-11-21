import React from 'react';
import theme from '../../styles/theme';
import { Text } from '../Text';

import {
    Container,
    OrderHeader,
    Content,
    CancelBtn,
    Table
} from './styles';

interface HeaderProps {
    selectedTable: string;
    onCancelOrder: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedTable, onCancelOrder }) => {
    return (
        <Container>
            {!selectedTable && (
                <>
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
                </>
            )}

            {selectedTable && (
                <Content>
                    <OrderHeader>
                        <Text
                            size={24}
                            weight={theme.FONTS.GENERAL_SEMI}
                        >
                            Pedido
                        </Text>
                        <CancelBtn
                            onPress={onCancelOrder}
                        >
                            <Text
                                color="#d73035"
                                weight={theme.FONTS.GENERAL_SEMI}
                                size={14}
                            >
                                cancelar pedido
                            </Text>
                        </CancelBtn>
                    </OrderHeader>

                    <Table>
                        <Text
                            color="#666"
                        >
                            Mesa {selectedTable}
                        </Text>
                    </Table>
                </Content>
            )}
        </Container>
    );
}

export default Header;
