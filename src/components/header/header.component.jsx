import React from 'react'
import './header.style.scss'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cartDropdonw.component'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop">
                SHOP
            </Link>
            <Link className="option" to='/contact'> CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}> SIGNG OUT </div>
                ) : (
                        <Link className='option' to='/signin'> SIGN IN </Link>)
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

//allow us to access to state -> our root reducer
//pass current user property
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
}); // root Reducer -> user reducer ex: initial null

export default connect(mapStateToProps)(Header)

