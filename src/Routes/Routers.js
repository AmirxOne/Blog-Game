import React from 'react';
// Component
import Home from '../page/Home';
// react router dom
import {Routes, Route, Navigate} from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/*' element={<Navigate to='/home'/>}/>
        </Routes>
    );
};

export default Routers;