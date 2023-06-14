import React from 'react';
import { Switch, Route, withRouter, type RouteComponentProps } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Portfolio from '../Portfolio';
import Team from '../Team';
import Contact from '../Contact';
import Error from '../Error';

class MainView extends React.Component<RouteComponentProps> {
  render (): React.ReactNode {
    return (
      <div className="main-view">
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/products">
            <Portfolio />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(MainView);
