import React from 'react';
import Header from './Header';
import Routers from '../../Routes/Routers';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header/>
            <Routers/>
            <Footer/>
        </>
    );
};

export default Layout;