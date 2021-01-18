import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/routes/private/Private";

import LoginPage from './pages/auth/login'
import Profile from './pages/profile';


function Routes(){
    return (
        <StoreProvider>
            <BrowserRouter>
                <Route component={LoginPage} path="/login"  />
                <RoutesPrivate component={Profile} path="/"  exact />
            </BrowserRouter>
        </StoreProvider>
    )
}

export default Routes;