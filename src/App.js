import React from 'react';
import HomePage from './pages/homePage/homePage.component'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ShopPage from './pages/shopPage/shopPage.component'
import Header from './components/header/header.component'
import SignInAndSingUpPage from './pages/sign-in-sing-up-page/sing-in-sign-up-page.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={(() =>
            this.props.currentUser ? (
              <Redirect to='/' />) : (<SignInAndSingUpPage />)

          )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
//dispach the props and returnn the object (SET_CURRENT_USER)
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //way of redux to know what ever you passing me (objects action) is going to pass to all of reducers
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
