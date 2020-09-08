import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import Header from '../components/Header';
import { Home } from '../pages/Home';

export const AppRoutes = () => (
  <Router>
    <Header />
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" component={Home} />
        <Route
          component={() => (
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <img src="https://cdn.dribbble.com/users/1197927/screenshots/8062981/media/498b9f796d031f3c2370130510d63f2f.gif" alt="not-found"/>
                </div>
              </div>
            </div>
          )}
        />
      </Switch>
    </div>
  </Router>
);
