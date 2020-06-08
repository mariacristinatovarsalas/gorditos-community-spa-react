import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import BodyHome from './components/BodyHome'
import BodyUsers from './components/BodyUsers'
import BodyRegister from './components/BodyRegister'


function App() {
  return (
    <div>
      <Header spancolor="yellow"/>
      <BrowserRouter>
          <Route exact path='/' component={BodyHome} />
          <Route exact path='/users' render={() => <BodyUsers nameclass={"position"} />} />
          <Route exact path='/register' component={BodyRegister} />
      </BrowserRouter>
    </div>
  );
}

export default App;