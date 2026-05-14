//import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Hello from './Pages/Hello';
import Feedback from './Pages/Feedback';
import RadioButton from './Pages/RadioButton';
import Dropdown from './Pages/Dropdown';
import Navbar from './Pages/navbar';
import Login from './Pages/Login';
import Login2 from './Pages/Login2';
import Counter from './Component/count';
import Color from './Component/color';
import Myapp from './Component/Myapp';
import Add from './Component/addition';
import Todo from './Component/Todo';
import Todocart from './Component/Todocart';
import Object from './Component/object';
import AccProps from './Component/accProps';
import AccProps2 from './Component/accProps2';
import AccProps3 from './Component/accProps3';
import ObjectProps2 from './Component/ObjectProps2';
import NamesList from './Component/Map';
import InputObject from './Component/object2';

import UserPage from './Pages/user';
import InsertUser from './Pages/userInsert';
import EditUser from './Pages/userEdit';
import UpdateUser from './Pages/userUpdate';
// import DeleteUser from './Pages/userDelete';

import Product from './Pages/Product';
import Country from './Pages/Country';
import Demo from './Pages/Demo';





function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/radio" element={<RadioButton/>}/>
        <Route path="/dropdown" element={<Dropdown/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login2" element={<Login2/>}/>
        <Route path="/count" element={<Counter/>}/>
        <Route path="/color" element={<Color/>}/>
        <Route path="/myapp" element={<Myapp/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/todocart" element={<Todocart/>}/>
        <Route path="/accprops" element={<AccProps/>}/>
        <Route path="/accprops2" element={<AccProps2/>}/>
        <Route path="/accprops3" element={<AccProps3/>}/>
        <Route path="/object" element={<Object/>}/>
        <Route path="/objectprops" element={<ObjectProps2/>}/>
        <Route path="/map" element={<NamesList/>}/>
        <Route path="/object2" element={<InputObject/>}/>

        <Route path="/home" element={<h1>Home Page</h1>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/insert" element={<InsertUser/>}/>
        <Route path="/userEdit/:id" element={<EditUser/>}/>
        {/* <Route path="/userDelete/:id" element={<DeleteUser/>}/> */}

        <Route path="/product" element={<Product/>}/>
        <Route path="/country" element={<Country/>}/>
        <Route path='/demo' element={<Demo/>}/>




      </Routes>  
    </div>
    </Router>
  );
}

export default App;
