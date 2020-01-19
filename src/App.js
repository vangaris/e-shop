import React from 'react';
import HomePage from './pages/homePage/homePage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shopPage/shop.component'

const HatsPage = () => (
  <div>
    <h1>Hatpage</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>

  );
}

export default App;
