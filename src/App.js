import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import PatientForm from './components/PatientForm.js';
import ViewPatientsData from './components/ViewPatientsData'
import HomePage from './components/Home'

const App = (Props) => {
  return (
      <Router>
        <Switch>
          <Route exact path = "/patientform" component = {PatientForm}></Route>
          <Route exact path = "/viewpatients" component ={ViewPatientsData}></Route>
          <Route exact path = "/" component = {HomePage} ></Route>
        </Switch>

        {/* <Redirect
          strict
          from ="/"
          to = {'/patientform'}
          /> */}
      </Router>
  );
}

export default App;
