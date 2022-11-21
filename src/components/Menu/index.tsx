import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Product } from '../../@types/Product';

import { products } from '../../mocks/products';
import theme from '../../styles/theme';
import { FormatCurrency } from '../../utils/FormatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import ProductModal from '../ProductModal';
import { Text } from '../Text';

import {
    ProductContainer,
    Image,
    ProductDetails,
    Separator,
    AddBtn,
} from './styles';

const Menu: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)

    const handleOpenModal = (product: Product) => {
        setModalVisible(!modalVisible);
        setSelectedProduct(product)
    }

    return (
        <>
            <ProductModal
                isVisible={modalVisible}
                onClose={() => setModalVisible(!modalVisible)}
                product={selectedProduct}

            />
            <FlatList
                data={products}
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                keyExtractor={product => product._id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item: product }) => (
                    <ProductContainer
                        onPress={() => handleOpenModal(product)}
                    >
                        <Image source={{
                            uri: `http://192.168.1.4:3001/uploads/${product.imagePath}`
                        }} />
                        <ProductDetails>
                            <Text
                                weight={theme.FONTS.GENERAL_SEMI}
                            >
                                {product.name}
                            </Text>
                            <Text
                                style={{ marginVertical: 8 }}
                                size={14}
                            >
                                {product.description}
                            </Text>
                            <Text
                                weight={theme.FONTS.GENERAL_SEMI}
                            >
                                {FormatCurrency(product.price)}
                            </Text>
                        </ProductDetails>
                        <AddBtn>
                            <PlusCircle />
                        </AddBtn>
                    </ProductContainer>
                )}
            />
        </>
    );
}

export default Menu;
