import React from 'react';
// Component
import Home from '../page/Home';
import BlogsPages from '../page/BlogsPages';
import ProgramersPages from '../page/ProgramersPages';
// react router dom
import {Routes, Route, Navigate} from 'react-router-dom'
import ScrollToTop from '../components/ScrollTop';

const Routers = () => {
    return (
        <>
        <ScrollToTop/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/*' element={<Navigate to='/home'/>}/>
            <Route path='/blogs/:slug' element={<BlogsPages/>}/>
            <Route path='/authors/:slug' element={<ProgramersPages/>}/>
        </Routes>
        </>
    );
};

export default Routers;