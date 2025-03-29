/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Navigate, Route, Routes as Switch } from 'react-router-dom';
//import { Routes as RouterRoutes } from 'react-router-dom';

import { Dashboard } from "../pages/";
import React from 'react';
import { Login } from '../pages';


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );
}