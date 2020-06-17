import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile'
import Incidents from './pages/incidents'

const Routes = () => {
    return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/register" component={Register} ></Route>
                    <Route path="/profile" component={Profile} ></Route>
                    <Route path="/incidents/new" component={Incidents} ></Route>
                </Switch>
            </BrowserRouter>
    );
}

export default Routes;