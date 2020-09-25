import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import HomeContents from './Header/HomeContents/HomeContents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import DetailsOfDestination from './DetailsOfDestination/DetailsOfDestination';
import Booking from './Booking/Booking';
import Login from './Login/Login';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
       <Header/>\
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <p>name: {loggedInUser.name}</p>
       <Router>
        <Switch>
          <Route exact path='/'>
            <HomeContents></HomeContents>
          </Route>
          <Route path='/DetailsOfDestination/:id'>
            <DetailsOfDestination></DetailsOfDestination>
          </Route>
          <Route path='/Booking'>
            <Booking></Booking>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
       </Router>
       </UserContext.Provider>
    </div>
   
  );
}

export default App;
