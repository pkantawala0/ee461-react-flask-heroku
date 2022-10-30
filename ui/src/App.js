import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import Project from './Project.js';
import {useState} from 'react';


function App (){

  return (
    <body>
        <Project num = "1"/>
        <Project num = "2"/>
        <Project num = "3"/>
    
    </body>
  );
}


export default App;
