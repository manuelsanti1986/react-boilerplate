import React from 'react';
import { Route, Switch } from "react-router-dom";

import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";


const RoutingComponent = (props) => (
    <main>
        <Switch>
            <Route path="/" component={ComponentOne} exact />
            <Route path="/one" render={props => <ComponentOne />} />
            <Route path="/two" render={props => <ComponentTwo />} />
            <Route path="/three" render={props => <ComponentThree />} />
            <Route component={ComponentOne} />
        </Switch>
    </main>
);

export default RoutingComponent;
