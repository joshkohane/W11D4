import React from "react";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
import App from "./app";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </HashRouter>
    </Provider>
);

export default Root;
