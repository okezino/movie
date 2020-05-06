import React, { Component } from 'react';
import Searchform from "./Components/searchform"
import Load from "./Components/loading";

class Home extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <Searchform />
            <Load />
            </React.Fragment>
        );
    }
}
 
export default Home;