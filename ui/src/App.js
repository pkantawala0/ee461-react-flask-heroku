import './App.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import Project from './Project.js';
import {useState} from 'react';

const HW1_AVAIL = 0;
const HW2_AVAIL = 0;
const HW1_CAP = 0;
const HW2_CAP = 0;

function App (){

  return (
    <body>
        <Project
          num = "1"
          hw1 = "0"
          hw2 = "0" />
        <Project
          num = "2"
          hw1 = "0"
          hw2 = "0" />
        <Project
          num = "3"
          hw1 = "0"
          hw2 = "0" />
    
    </body>
  );
}


export default App;
