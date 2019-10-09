import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utlis/index';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/landing" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;