import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from "react-dom";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <Route path="login" component={Login} />
                    <Route path="register" component={Register} />
                    <Route path="signOut" component={Root} />
                </Route>
                 <Route path="profile/:userId/:email" component={Profile} />
            </Router>
        );

    }
}

render(<App />, document.getElementById('appDiv-wrapper'));
