import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            {children}
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}; 

export default Layout;
