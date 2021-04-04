import React from "react";
import {Navbar } from 'react-bootstrap';


function AppBar() {
  const flagName = 'FlagQuiz';
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">{flagName}
          </Navbar.Brand>
         <Navbar className="configIcon float-right" > 
           <i class="fa fa-cog" aria-hidden="true"></i>
          </Navbar>
        </Navbar>
      </>
    </div>
  );
}

export default AppBar;
