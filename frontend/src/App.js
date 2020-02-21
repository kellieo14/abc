import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CreateMember from './components/team/CreateMember';
import EditMember from './components/team/EditMember';
import AboutUs from './components/about/AboutUs';
import Homepage from './components/Homepage';
import Dashboard from './components/admin/Dashboard';
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import { axiosSetup, axiosGetRequest } from './axiosRequest';

axiosSetup();
function App () {
  return (
    <Router>
      <Route exact path ='/team' component={AboutUs} />
      <Route path='/team/new' component={CreateMember} />
      <Route path='/team/:id/edit' component={EditMember} />
      <Route path='/admin' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route exact path='/' component={Homepage} />
    </Router>
  );
}

export default App;
