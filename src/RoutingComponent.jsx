import React from 'react';
import { Route, Switch } from "react-router-dom";

import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";


const RoutingComponent = (props) => (
    <main>
        <Switch>
            <Route path="/" component={ComponentOne} exact />
            <Route path="/one" render={props => <ComponentOne />} />
            <Route path="/two" render={props => <ComponentTwo />} />
            <Route component={ComponentOne} />
        </Switch>
    </main>
);

export default RoutingComponent;
