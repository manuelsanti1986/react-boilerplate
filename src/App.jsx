import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import FluxStore from "./store/flux-store";
import RoutingComponent from './RoutingComponent';

export default class App extends Component {
    render() {
        return (
            <Provider store={FluxStore}>
                <BrowserRouter>
                    <RoutingComponent />
                </BrowserRouter>
            </Provider>
        );
    }
}
