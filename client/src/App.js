import './index.css'
import Nav from './components/navigation/nav'
import Timer from './components/timerPage/timer'
import Ham from './components/menu/ham'
import Target from './components/targetAndChat/target'
import Message from './components/targetAndChat/message'
// import Circular from './components/menu/circular'
import Login from './components/login/login'
import Forget from './components/login/forget'
import Transition from './components/login/transition'
import SignUp from './components/login/signUp'
import NewPassword from './components/login/newPassword'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(){
  return (
    <>
     <Router>
      <Nav title="CUBOHOLIC"/>  
      <Timer /> 
      <Ham />
      <Message />
      <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/transition">
            <Transition />
          </Route>
          <Route exact path="/forget">
            <Forget />
          </Route>
          <Route exact path="/newPassword">
            <NewPassword />
          </Route>
      </Switch>
      </Router>
      <Target />
    </>
  );
}

export default App;
