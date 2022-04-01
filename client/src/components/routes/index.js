import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

//pages
import Home from '../../pages/Home'
import Agenda from '../../pages/Agenda'

const index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/agenda" element={<Agenda/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
};

export default index;