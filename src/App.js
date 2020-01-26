import React from 'react';
import HomePage from './pages/homePage/homePage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shopPage/shopPage.component'
import Header from './components/header/header.component'
import SignInAndSingUpPage from './pages/sign-in-sing-up-page/sing-in-sign-up-page.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }

  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSingUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
