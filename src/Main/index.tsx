import React from 'react';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';

import {
    Container,
    CategoriesContainer,
    MenuContainer,
    Footer,
    FooterContainer
} from './styles';

const Main: React.FC = () => {
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
                    <Button
                        onPress={() => {}}
                    >
                        Novo pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </>
    );
}

export default Main;
