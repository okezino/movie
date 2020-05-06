import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   <div className="container">
         
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
           <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="https://covid19.ncdc.gov.ng/index.php">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="https://covid19.ncdc.gov.ng/index.php">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="https://covid19.ncdc.gov.ng/index.php">Portfolio</Link>
            </li>
          </ul>
          </div>
           <form className ="form-inline d-none d-md-block" action="/action_page.php">
           <input className ="form-control mr-sm-2" type="text" placeholder="Search"></input>
           <button className ="btn btn-success" type="submit">Search</button>
           </form>
           
          
        </nav>
        </div>);
    }
}
 
export default Nav;