import React, { useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

import {
    CategoryContainer,
    IconContainer
} from './styles';

import { Text } from '../Text';
import theme from '../../styles/theme';
import { Category } from '../../@types/Category';

interface CategoryProps {
    categories: Category[];
    onSelectCategory: (categoryId: string) => Promise<void>;
}

const Categories: React.FC<CategoryProps> = ({categories, onSelectCategory}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    const handleSelectionCategory = (categoryId: string) => {
        const category = selectedCategory === categoryId ? '' : categoryId
        onSelectCategory(category)
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
                    <CategoryContainer onPress={() => handleSelectionCategory(category._id)}>
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
                    </CategoryContainer>
                )
            }}
        />
    );
}

export default Categories;
