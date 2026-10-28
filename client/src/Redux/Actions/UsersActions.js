import React from 'react'
import { CURRENTUSER, REGISTER, FAIL, LOGIN, LOGOUT } from '../ActionsTypes/UsersActionsTypes'
import axios from 'axios';
import { handleerror } from './ErrorsActions';
export const register = (cordUser, navigate) => async (dispatch) => {
    try {
        console.log(cordUser)
        const res = await axios.post('/api/userAuth/SignUp', cordUser)
        dispatch({
            type: REGISTER,
            payload: res.data
        })
        navigate('/Profile')
    } catch (error) {
          error.response.data.errors.forEach(element => {
        dispatch(handleerror(element.msg))
       });
    }
}
export const login = (cordUser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/api/userAuth/SignIn', cordUser)
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        navigate('/Profile')
    } catch (error) {
       error.response.data.errors.forEach(element => {
        dispatch(handleerror(element.msg))
       });
    }
}

export const currentuser = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/userAuth/CurrentUser', config)
        dispatch({
            type: CURRENTUSER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data.errors
        })
    }
}
export const logout = () => {
    return (
        {
            type: LOGOUT,
        }
    )
}