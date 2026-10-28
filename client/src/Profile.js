import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser } from './Redux/Actions/UsersActions'

const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentuser())
  }, [])
  const user = useSelector(state => state.UsersReducer.user)
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Profile