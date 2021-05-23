import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ContentWrapperStyles } from '../../styles/MainPage.styles';

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <ContentWrapperStyles>
                <Header />
            </ContentWrapperStyles>
            {children}
            <Footer />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}; 

export default Layout;
