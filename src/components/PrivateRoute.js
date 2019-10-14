import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utlis/index';

const PrivateRoute = ({component: Component, ...rest}) => {
    console.log("rest..........", rest);
console.log("Component....", Component);
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;