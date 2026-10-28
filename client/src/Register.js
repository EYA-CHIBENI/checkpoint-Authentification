import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { register } from './Redux/Actions/UsersActions';
const Register = () => {
const [name,setName]=useState()
const [email,setEmail]=useState()    
const [password,setPassword]=useState()
const navigate = useNavigate()
const dispatch = useDispatch()
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Button onClick={(e)=>{e.preventDefault(); dispatch(register({name,email,password}, navigate))}} variant="primary" type="submit">
                Register
            </Button>
        </Form>
    )
}

export default Register