import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import RoutingComponent from './RoutingComponent';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RoutingComponent />
            </BrowserRouter>
        );
    }
}
