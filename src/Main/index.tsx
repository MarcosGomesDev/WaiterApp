import React, { useState } from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';

import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer
} from './styles';

const Main: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [selectedTable, setSelectedTable] = useState<string>('')

    const handleSaveTable = (table: string) => {
        setSelectedTable(table);
    }

    return (
        <>
            <Container>
                <Header />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu />
                </MenuContainer>
            </Container>
            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            Novo pedido
                        </Button>
                    )}
                </FooterContainer>
            </Footer>

            <TableModal
                isVisible={modalVisible}
                onClose={() => setModalVisible(!modalVisible)}
                onSave={handleSaveTable}
            />
        </>
    );
}

export default Main;
