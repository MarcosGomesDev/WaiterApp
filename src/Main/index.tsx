import React, { useState } from 'react';
import { CartItem } from '../@types/Cart';
import { Product } from '../@types/Product';
import Button from '../components/Button';
import Cart from '../components/Cart';
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
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedTable, setSelectedTable] = useState<string>('');
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const handleSaveTable = (table: string) => {
        setSelectedTable(table);
    }

    const handleCancelOrder = () => {
        setSelectedTable('');
    }

    const handleAddToCart = (product: Product) => {
        if (!selectedTable) {
            setModalVisible(!modalVisible);
        }

        setCartItems((prevState) => {
            const index = prevState.findIndex(cartItem => cartItem.product._id === product._id);

            if (index < 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                })
            }

            const newCartItems = [...prevState];
            const item = newCartItems[index]
            newCartItems[index] = {
                ...item,
                quantity: item.quantity + 1,
            }

            return newCartItems;
        });
    }

    const handleRemoveToCart = (product: Product) => {
        setCartItems((prevState) => {
            const index = prevState.findIndex(cartItem => cartItem.product._id === product._id);

            const item = prevState[index];
            const newCartItems = [...prevState];

            if (item.quantity === 1) {

                newCartItems.splice(index, 1);

                return newCartItems
            }

            newCartItems[index] = {
                ...item,
                quantity: item.quantity - 1,
            }

            return newCartItems;
        });
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleCancelOrder}
                />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu
                        onAddToCart={handleAddToCart}
                    />
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

                    {selectedTable && (
                        <Cart
                            cartItems={cartItems}
                            onAdd={handleAddToCart}
                            onRemove={handleRemoveToCart}
                        />
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
