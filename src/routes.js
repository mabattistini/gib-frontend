import {Route, BrowserRouter} from 'react-router-dom';

import Profile from './pages/profile';


function Routes(){
    return (
        <BrowserRouter>
            <Route component={Profile} path="/" exact />
        </BrowserRouter>
    )
}

export default Routes;