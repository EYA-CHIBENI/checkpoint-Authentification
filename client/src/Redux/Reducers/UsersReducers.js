import { CURRENTUSER,REGISTER, FAIL, LOGIN, LOGOUT} from '../ActionsTypes/UsersActionsTypes'

const initialState = {
    user: {},
    errors: []
}
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.newUser, errors: [] }
        case FAIL: return { ...state, errors: action.payload }
        case LOGIN: localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.found, errors: [] }
        case CURRENTUSER: return { ...state, user: action.payload }
        case LOGOUT: localStorage.removeItem('token')
      return {...state, user : {}, errors : []}
        default: return state;
    }
}
export default UsersReducer;