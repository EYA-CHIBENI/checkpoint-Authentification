import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from './Redux/Actions/UsersActions';
const NavAuth = () => {
const navigate = useNavigate()
const dispatch = useDispatch()

    const token = localStorage.getItem('token')
    const user = useSelector(state => state.UsersReducer.user)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >Authentification</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/' >Home</Nav.Link>
                    {
                        token && user ?
                            <>
                                <Nav.Link as={Link} to='/Profile' >Profile</Nav.Link>
                                <Nav.Link onClick={()=>{ dispatch(logout()); navigate('/')}}>Logout</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={Link} to='/Register' >Register</Nav.Link>
                                <Nav.Link as={Link} to='/Login' >Login</Nav.Link>
                            </>
                    }

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavAuth