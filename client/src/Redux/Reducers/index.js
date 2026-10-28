import {combineReducers} from 'redux'
import UsersReducer from './UsersReducers'
import ErrorsReducer from './ErrorsReducer';
const rootReducer= combineReducers({UsersReducer, ErrorsReducer})
export default rootReducer;