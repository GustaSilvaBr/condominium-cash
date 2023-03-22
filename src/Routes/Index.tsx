import React, { useEffect, useState } from 'react';

import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import {Dashboard} from '../Pages/Dashboard/Index';
import {Expenses} from '../Pages/Expenses/Index';
import {Revenues} from '../Pages/Revenues/Index';
import {Login} from '../Pages/Login/Index';

export function Root(){

    return (
        <Routes>
            <Route path='/' element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            }/>

            <Route path='/dashboard' element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            }/>
            <Route path='/revenues' element={
                <PrivateRoute>
                    <Revenues/>
                </PrivateRoute>
            }/>
            <Route path='/expenses' element={
                <PrivateRoute>
                    <Expenses/>
                </PrivateRoute>
            }/>
            
        </Routes>
    )
}

const isAuthenticated = true;

function PrivateRoute({children}: {children: JSX.Element}){
    const location = useLocation();
    if(!isAuthenticated){
        return <Navigate to="/" state={{from: location}} replace/>;
    }

    return children;
}

function PublicRoute({children}: {children: JSX.Element}){
    const location = useLocation();
    if(isAuthenticated){
        return <Navigate to="/dashboard" state={{from: location}} replace/>;
    }

    return children;
}