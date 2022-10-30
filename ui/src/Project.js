import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from 'material-ui/TextField';
import {useState} from 'react';

// var qty = document.getElementById("my-data").getAttribute("qty")
// function retQty(qty) {
//   return qty
// } 

// function retID(projectID) {
//   return projectID
// } 

class Project extends React.Component {
    constructor(props)
    {
      super(props);
      this.state=
      {
        projectNum: props.num
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('hardware checked in ' + this.state.projectID);
      event.preventDefault();
    }

    render() {
      return (
        <body>
          <div class = "container">
           <div class = "Project">
              <p>
                  Project Name {this.state.projectNum}
              </p>
           </div>
           <div class = "authusers">
              <p>
                user1, user2, user3
              </p>
           </div> 
           <div class = "HWSet">
              <div class = "Set">
                <p>
                  HWSet1: 50/100
                </p>
              </div>
              <div class = "Set">   
                <p>
                  HWSet2: 0/100
                </p>
              </div>
           </div>
           <div class = "HWSet">
            <div class = "TextFields">
             <TextField label="Enter qty" variant="outlined" />
            </div>
            <div class = "TextFields">
             <TextField label="Enter qty" variant="outlined" />
            </div>
           </div>
           
           <div class = "HWSet">
            <div class = "Buttons">
            <Button variant="text" onClick={() => { alert(" hardware checked in"); }}>
                Check In
            </Button>
            </div>
            <div class = "Buttons">
            <Button variant="text" onClick={() => { alert(" hardware checked in"); }} >
                Check In
              </Button>
            </div>
           </div>
           <div class = "HWSet">
           <div class = "Buttons">
           <Button variant="text" onClick={() => { alert(" hardware checked out"); }} >
                Check Out
              </Button>           
            </div>
            <div class = "Buttons">
            <Button variant="text" onClick={() => { alert(" hardware checked out"); }} >
                Check Out
              </Button>
              </div>
           </div>
           <div class = "Join">
            <div class = "Buttons">
              <Button variant="text" onClick={() => { alert("Joined "); }} >
                Join
              </Button>
            </div> 
           </div>
        </div>
        </body>
      )
    }
  }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
    
  export default Project