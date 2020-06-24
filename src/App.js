import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import BodyHome from './components/BodyHome'
import BodyUsers from './components/BodyUsers'
import BodyRegister from './components/BodyRegister'


function App() {
  
  return (
    <div>
      <Header spancolor="yellow"/>
      <HashRouter>
          <Route exact path='/' component={BodyHome} />
          <Route exact path='/users' render={() => <BodyUsers nameclass={"position"} />} />
          <Route exact path='/register' component={BodyRegister} />
      </HashRouter>
    </div>
  );
}

export default App;