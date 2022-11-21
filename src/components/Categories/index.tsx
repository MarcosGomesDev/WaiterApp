import React, { useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

import {
    Category,
    IconContainer
} from './styles';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import theme from '../../styles/theme';

const Categories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    const handleSelectionCategory = (categoryId: string) => {
        const category = selectedCategory === categoryId ? '' : categoryId
        setSelectedCategory(category)
    }

    return (
        <FlatList
            data={categories}
            keyExtractor={category => category._id}
            horizontal
            contentContainerStyle={{ paddingRight: 24 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: category }) => {
                const isSelected = selectedCategory === category._id

                return (
                    <Category onPress={() => handleSelectionCategory(category._id)}>
                        <IconContainer>
                            <Text
                                opacity={isSelected ? 1 : 0.5}
                            >
                                {category.icon}
                            </Text>
                        </IconContainer>

                        <Text
                            opacity={isSelected ? 1 : 0.5}
                            size={14}
                            weight={theme.FONTS.GENERAL_SEMI}
                        >
                            {category.name}
                        </Text>
                    </Category>
                )
            }}
        />
    );
}

export default Categories;
