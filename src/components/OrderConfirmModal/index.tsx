import React from 'react';
import { Modal } from 'react-native';
import theme from '../../styles/theme';
import { CheckCircle } from '../Icons/CheckCircle';
import StatusBarCustom from '../StatusBarCustom';
import { Text } from '../Text';

import { ConfirmBtn, Container } from './styles';

interface ModalProps {
    isVisible: boolean;
    onConfirm: () => void;
}

const OrderConfirmModal: React.FC<ModalProps> = ({ isVisible, onConfirm }) => {
    return (
        <Modal
            visible={isVisible}
            animationType="fade"
        >
            <StatusBarCustom
                style='light-content'
                background='#d73530'
            />
            <Container>
                <CheckCircle />
                <Text
                    size={20}
                    weight={theme.FONTS.GENERAL_SEMI}
                    color="#fff"
                    style={{ marginTop: 12 }}
                >
                    Pedido confirmado
                </Text>
                <Text
                    color="#fff"
                    opacity={0.9}
                    style={{ marginTop: 4 }}
                >
                    O pedido já entrou na fila de produção!
                </Text>

                <ConfirmBtn
                    onPress={onConfirm}
                >
                    <Text
                        color="#d73035"
                        weight={theme.FONTS.GENERAL_SEMI}
                    >
                        OK
                    </Text>
                </ConfirmBtn>
            </Container>
        </Modal>
    );
}

export default OrderConfirmModal;
