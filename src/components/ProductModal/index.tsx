import React from 'react';
import { FlatList, Modal, View } from 'react-native';
import { Product } from '../../@types/Product';
import theme from '../../styles/theme';
import { FormatCurrency } from '../../utils/FormatCurrency';
import Button from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';

import {
    CloseBtn,
    Header,
    Image,
    ModalBody,
    IngredientsContainer,
    Ingredient,
    Footer,
    FooterContainer,
    PriceContainer
} from './styles';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    product: null | Product;
    onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ModalProps> = ({ isVisible, onClose, product, onAddToCart }) => {
    if (!product) {
        return null;
    }

    const handleAddToCart = () => {
        onAddToCart(product!);
        onClose();
    }

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            presentationStyle='pageSheet'
            onRequestClose={onClose}
        >
            <Image
                source={{
                    uri: `http://192.168.1.4:3001/uploads/${product.imagePath}`
                }}
            >
                <CloseBtn
                    onPress={onClose}
                >
                    <Close color="#fff" />
                </CloseBtn>
            </Image>

            <ModalBody>
                <Header>
                    <Text
                        size={24}
                        weight={theme.FONTS.GENERAL_SEMI}
                    >
                        {product.name}
                    </Text>
                    <Text
                        color="#666"
                        style={{ marginTop: 8 }}
                    >
                        {product.description}
                    </Text>
                </Header>

                {product.ingredients.length > 0 && (
                    <IngredientsContainer>
                        <Text
                            weight={theme.FONTS.GENERAL_SEMI}
                            color="#666"
                        >
                            Ingredientes
                        </Text>

                        <FlatList
                            data={product.ingredients}
                            keyExtractor={ingredient => ingredient._id}
                            style={{
                                marginTop: 16
                            }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item: ingredient }) => (
                                <Ingredient>
                                    <Text>{ingredient.icon}</Text>
                                    <Text
                                        size={14}
                                        color="#666"
                                        style={{ marginLeft: 20 }}
                                    >
                                        {ingredient.name}
                                    </Text>
                                </Ingredient>
                            )}
                        />
                    </IngredientsContainer>
                )}
            </ModalBody>

            <Footer>
                <FooterContainer>
                    <PriceContainer>
                        <Text
                            color="#666"
                        >
                            Preço
                        </Text>
                        <Text
                            size={20}
                            weight={theme.FONTS.GENERAL_SEMI}
                        >
                            {FormatCurrency(product.price)}
                        </Text>
                    </PriceContainer>
                    <Button
                        onPress={handleAddToCart}
                    >
                        Adicionar ao pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </Modal>
    );
}

export default ProductModal;
