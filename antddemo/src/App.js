
import OperatingPage from "./components/OperatingPage";
import Login from "./components/Login";



import {BrowserRouter,Route,Switch} from 'react-router-dom';


import React,{ useState } from 'react';

import './App.css';


function App() {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/page1" component={OperatingPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
