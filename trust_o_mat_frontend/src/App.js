import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Profile from './components/Profile';
import Footer from "./components/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
        <Header />
        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
