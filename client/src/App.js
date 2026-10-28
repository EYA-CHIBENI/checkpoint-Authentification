import './App.css';
import Home from './Home';
import NavAuth from './NavAuth';
import {Route,Routes} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import DisplayErrors from './DisplayErrors';
function App() {
  return (
    <div className="App">
<NavAuth/>
<DisplayErrors></DisplayErrors>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/Register' element={<Register/>} />
<Route path='/Login' element={<Login/>} />
<Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute> }/>
</Routes>
    </div>
  );
}

export default App;
