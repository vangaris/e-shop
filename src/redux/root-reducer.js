//represents all the state of our application
import { combineReducers } from 'redux'

import userReducer from '../redux/user/user.reducer'

export default combineReducers({
    user: userReducer
})