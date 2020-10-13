
import Clock from './components/Clock';
import OperatingPage from "./components/OperatingPage";
import Login from "./components/Login";
import logo from './logo.svg';
import { Table, Button} from 'antd'
import {EnvironmentTwoTone} from '@ant-design/icons';


import React,{ useState } from 'react';

import './App.css';


function App() {

  return (
    <div className="App">
        <OperatingPage/>
        <Clock/>
        <Login/>
    </div>

  );
}

export default App;
