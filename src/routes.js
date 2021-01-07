import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import LoginPage from './pages/auth/login'
import Profile from './pages/profile';


function Routes(){
    return (
        <BrowserRouter>
            <Route component={LoginPage} path="/login"  />
            <Route component={Profile} path="/"  exact />
        </BrowserRouter>
    )
}

export default Routes;