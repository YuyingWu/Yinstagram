import styles from "../assets/styles/base.less";

import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import { Layout } from "../components/Layout";
import List from "./List";
import Detail from "./Detail";

class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path={ "/" } component={ Layout }>
                    <IndexRoute component={ List } />
                    <Route path={ "detail/:id" } component={ Detail } />
                </Route>
                <Route path={ "*" } component={ Layout }>
                    <IndexRoute component={ List } />
                </Route>
            </Router>
        );
    }
}

export default App;
