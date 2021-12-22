import {Switch,Route} from "react-router-dom";
import Home from "../src/Components/Home/Home.jsx"
import Login from './Login/Login';
import { createContext, useState } from 'react';
import Sidebar from './Components/DashBoard/Sidebar/Sidebar';
import AddService from './Components/DashBoard/AddService/AddService';
import Manage from './Components/DashBoard/Manage/Manage';
import CheckOut from './Components/CheckOut/CheckOut';
import Order from './Components/Order/Order';
import Profile from './Components/Profile/Profile';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import Spinner from './Spinner/Spinner.jsx'


export const UserContext = createContext()
 const App=()=> {
  const[loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

    <Switch>
     <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home} />
      <Route path="/spinner" component={Spinner} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Sidebar}/>
      <Route path="/add" component={AddService}/>
      <PrivateRoute path="/manage" component={Manage}/>
      <PrivateRoute path="/order" component={Order}/>
      <PrivateRoute path="/book/:bookId" component={CheckOut}/>      
      <Route path="/profile" component={Profile}/>
     
    </Switch>
    </UserContext.Provider>
  );
}



export default App;











