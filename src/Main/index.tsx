import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { CartItem } from '../@types/CartItem';
import { Product } from '../@types/Product';
import { Category } from '../@types/Category';

import Button from '../components/Button';
import Cart from '../components/Cart';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Empty from '../components/Icons/Empty';
import Menu from '../components/Menu';
import StatusBarCustom from '../components/StatusBarCustom';
import TableModal from '../components/TableModal';
import { Text } from '../components/Text';

import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer,
    CenterContainer
} from './styles';
import api from '../services/api';


const Main: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [loadProducts, setLoadProducts] = useState<boolean>(false);
    const [selectedTable, setSelectedTable] = useState<string>('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        Promise.all([
            api.get('/categories'),
            api.get('/products')
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data)
            setProducts(productsResponse.data)
            setLoading(false)
        })
    }, [])

    const handleSelectCategory = async (cateogryId: string) => {
        const route = !cateogryId
            ? '/products'
            : `/categories/${cateogryId}/products`;

        setLoadProducts(true)

        const { data } = await api.get(route);
        setProducts(data);
        setLoadProducts(false);
    }

    const handleSaveTable = (table: string) => {
        setSelectedTable(table);
    }

    const handleResetOrder = () => {
        setCartItems([])
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
                <StatusBarCustom
                    style='dark-content'
                />
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleResetOrder}
                />

                {loading && (
                    <CenterContainer>
                        <ActivityIndicator color={"#d73035"} size="large" />
                    </CenterContainer>
                )}

                {!loading && (
                    <>
                        <CategoriesContainer>
                            <Categories
                                categories={categories}
                                onSelectCategory={handleSelectCategory}
                            />
                        </CategoriesContainer>

                        {loadProducts && (
                            <CenterContainer>
                                <ActivityIndicator color={"#d73035"} size="large" />
                            </CenterContainer>
                        )}

                        {!loadProducts && (
                            <>
                                {products.length > 0 ? (
                                    <MenuContainer>
                                        <Menu
                                            onAddToCart={handleAddToCart}
                                            products={products}
                                        />
                                    </MenuContainer>
                                ) : (
                                    <CenterContainer>
                                        <Empty />
                                        <Text
                                            color="#666"
                                            style={{ marginTop: 24 }}
                                        >
                                            Nenhum produto foi encontrado!
                                        </Text>
                                    </CenterContainer>
                                )}
                            </>
                        )}
                    </>
                )}
            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button
                            onPress={() => setModalVisible(!modalVisible)}
                            disabled={loading}
                        >
                            Novo pedido
                        </Button>
                    )}

                    {selectedTable && (
                        <Cart
                            cartItems={cartItems}
                            onAdd={handleAddToCart}
                            onRemove={handleRemoveToCart}
                            onConfirmOrder={handleResetOrder}
                            selectedTable={selectedTable}
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
