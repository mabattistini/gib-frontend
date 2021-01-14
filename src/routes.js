import React from "react";
//import {Route, BrowserRouter} from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-middleware-router'

import LoginPage from './pages/auth/login'
import Profile from './pages/profile';

import authMiddleware from './middlewares/auth'


function Routes(){
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/login" component={LoginPage}   />
                <Route path="/" middleware={[authMiddleware]} component={Profile}   exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

// // <Switch errorComponent={NotFound} loadingComponent={Spinner}>
