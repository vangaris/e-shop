import React from 'react';
import HomePage from './pages/homePage/homePage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shopPage/shopPage.component'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>

  );
}

export default App;
