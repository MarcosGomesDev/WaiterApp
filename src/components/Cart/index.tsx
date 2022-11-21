import React from 'react';
import { FlatList, View } from 'react-native';
import { CartItem } from '../../@types/Cart';
import theme from '../../styles/theme';
import { FormatCurrency } from '../../utils/FormatCurrency';
import Button from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
    Actions,
    ButtonOption,
    Image,
    Item,
    ProductContainer,
    ProductDetails,
    QuantityContainer,
    Summary,
    TotalContainer
} from './styles';

interface CartProps {
    cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
    return (
        <>
            {cartItems.length > 0 && (
                <FlatList
                    data={cartItems}
                    keyExtractor={cartItem => cartItem.product._id}
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: 20, maxHeight: 150 }}
                    renderItem={({ item: cartItem }) => (
                        <Item>
                            <ProductContainer>
                                <Image
                                    source={{
                                        uri: `http://192.168.1.4:3001/uploads/${cartItem.product.imagePath}`
                                    }}
                                />
                                <QuantityContainer>
                                    <Text
                                        size={14}
                                        color="#666"
                                    >
                                        {cartItem.quantity}x
                                    </Text>
                                </QuantityContainer>
                                <ProductDetails>
                                    <Text
                                        size={14}
                                        weight={theme.FONTS.GENERAL_SEMI}
                                    >
                                        {cartItem.product.name}
                                    </Text>
                                    <Text
                                        size={14}
                                        color="#666"
                                        style={{ marginTop: 4 }}
                                    >
                                        {FormatCurrency(cartItem.product.price)}
                                    </Text>
                                </ProductDetails>
                            </ProductContainer>
                            <Actions>
                                <ButtonOption
                                    style={{ marginRight: 28 }}
                                >
                                    <PlusCircle />
                                </ButtonOption>
                                <ButtonOption>
                                    <MinusCircle />
                                </ButtonOption>
                            </Actions>
                        </Item>
                    )}
                />
            )}

            <Summary>
                <TotalContainer>
                    {cartItems.length > 0 ? (
                        <>
                            <Text
                                color="#666"
                            >
                                Total
                            </Text>
                            <Text
                                size={20}
                                weight={theme.FONTS.GENERAL_SEMI}
                            >
                                {FormatCurrency(120)}
                            </Text>
                        </>
                    ) : (
                        <Text
                            color="#999"
                        >
                            Seu carrinho está vazio
                        </Text>
                    )}

                </TotalContainer>

                <Button
                    disabled={cartItems.length === 0}
                    onPress={() => { }}
                >
                    Confirmar pedido
                </Button>
            </Summary>
        </>
    );
}

export default Cart;
