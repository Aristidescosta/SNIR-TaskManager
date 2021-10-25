import React from 'react';
import './App.css';
import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from "./components/pages/SignIn/SignIn";
import Tasks from "./components/pages/Tasks/Tasks";
import AddTask from "./components/pages/AddTask/AddTask";
import Profile from "./components/pages/Profile/Profile";

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-in' exact component={SignIn} />
          <Route path='/tasks' exact component={Tasks} />
          <Route path='/add-task' exact component={AddTask} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;