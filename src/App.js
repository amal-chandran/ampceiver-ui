import React, { Component } from 'react';
import { LoginSignup, Home } from "./Views";
import { store, history } from "./Helper";
import { Provider, connect } from "react-redux";
import { PrivateRoute, Notifi, JSSWrapper } from "./Components";
import { ConnectedRouter } from 'react-router-redux';

import {
  Route, Switch, Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <JSSWrapper>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Notifi />
              <Switch>
                <PrivateRoute path="/home" component={Home} />
                <Route exact path="/" component={LoginSignup} />
              </Switch>
            </div>
          </ConnectedRouter>
        </Provider >
      </JSSWrapper>
    );
  }
}

export default App;
