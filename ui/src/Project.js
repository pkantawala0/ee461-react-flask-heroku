import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import Switch from '@mui/material/Button';
// import qty from 'ui\templates\settings.html';
// import projectID from 'ui\templates\settings.html';

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
        projectNum: props.num,
        HWSet1: props.hw1,
        HWSet2: props.hw2,
        // label: "Join"
      };

    //   this.updateState = this.updateState.bind(this)

      this.chkInHW1 = this.chkInHW1.bind(this);
      this.chkInHW2 = this.chkInHW2.bind(this);
      this.enableEdit = this.enableEdit.bind(this);

      this.chkOutHW1 = this.chkOutHW1.bind(this);
      this.chkOutHW2 = this.chkOutHW2.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    enableEdit()
    {   
        let temp = "NA"
        if(prevState => "Join")
        {
            this.setState({disabled: !this.state.disabled,
                label: "Leave"});
        }
        else
        {
            this.setState({disabled: !this.state.disabled,
                label: "Join"});

        }
    }  

    chkInHW1()
    {   
        this.setState(prevState => {
            return {HWSet1: (parseInt(prevState.HWSet1) + 1) + ""}
        });
    }

    chkInHW2()
    {   
        this.setState(prevState => {
            return {HWSet2: (parseInt(prevState.HWSet2) + 1) + ""}
         });
    }

    chkOutHW1()
    {   
         this.setState(prevState => {
            return {HWSet1: (parseInt(prevState.HWSet1) - 1) + ""}
         });
    }

    chkOutHW2()
    {   
        this.setState(prevState => {
            return {HWSet2: (parseInt(prevState.HWSet2) - 1) + ""}
         });
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
                  HWSet1: {this.state.HWSet1}
                </p>
              </div>
              <div class = "Set">   
                <p>
                  HWSet2: {this.state.HWSet2}
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
            <Button variant="text" onClick={() => {
                alert(" hardware checked in");
                this.chkInHW1();
                }}>
                Check In
            </Button>
            </div>
            <div class = "Buttons">
            <Button variant="text" onClick={() => {
                    alert(" hardware checked in"); 
                    this.chkInHW2();
                }} >
                Check In
              </Button>
            </div>
           </div>
           <div class = "HWSet">
           <div class = "Buttons">
           <Button variant="text" onClick={() => {
                alert(" hardware checked out");
                this.chkOutHW1();
            }} >
                Check Out
              </Button>           
            </div>
            <div class = "Buttons">
            <Button variant="text" onClick={() => {
                alert(" hardware checked out");
                this.chkOutHW2();
            }} >
                Check Out
              </Button>
              </div>
           </div>
           <div class = "Join">
            <div class = "Buttons">
              <Button variant="text" label = {this.state.label} onClick={() => {
                alert("Joined " + this.state.projectNum);
                {this.enableEdit}
                }} >
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