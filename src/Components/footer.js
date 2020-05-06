import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
               
<footer className="page-footer text-white font-small unique-color-dark pt-4 bg-dark container">

  

   
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
        <button href="#!" className="btn btn-outline-primary btn-rounded">Sign up!</button>
      </li>
    </ul>
   

  

 
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> clustertriangle.com</a>
  </div>


</footer>


        
         );
    }
}
 
export default Footer;