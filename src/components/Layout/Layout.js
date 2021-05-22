import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { MainWrapperStyles } from './Layout.styles';

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <MainWrapperStyles>
                {children}
            </MainWrapperStyles>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}; 

export default Layout;
