import React from 'react';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import { Route } from 'react-router-dom'
import Footer from "./components/Footer";
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={LandingPage} />
      <Route path="/politican/:id" component={Profile} />
      <Route path="/parties" component={PartyList} />
      <Route path="/parties/:id" component={Party} />
      <Footer />
    </div>
  );
}

export default App;