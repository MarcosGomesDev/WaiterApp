import React, { useState } from 'react';
import { Alert, Modal, Platform, View } from 'react-native';
import theme from '../../styles/theme';
import Button from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

import { Form, Header, ModalBody, Overlay, CloseModal, Input } from './styles';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

const TableModal: React.FC<ModalProps> = ({isVisible, onClose, onSave}) => {
    const [table, setTable] = useState<string>('')

    const handleSave = () => {
        onSave(table);
        onClose()
    }

    const handleCloseModal = () => {
        onClose()
        setTable('')
    }

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType='fade'
        >
            <Overlay behavior={Platform.OS === 'android' ? "height" : "padding"}>
                <ModalBody>
                    <Header>
                        <Text
                            weight={theme.FONTS.GENERAL_SEMI}
                        >
                            Informe a mesa
                        </Text>
                        <CloseModal
                            onPress={handleCloseModal}
                        >
                            <Close color='#666' />
                        </CloseModal>
                    </Header>

                    <Form>
                        <Input
                            placeholder="Número da mesa"
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                            onChangeText={setTable}
                        />
                        <Button
                            onPress={handleSave}
                            disabled={table.length === 0}
                        >
                            Salvar
                        </Button>
                    </Form>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}

export default TableModal;
