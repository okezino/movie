import React from 'react';
import {Provider} from "react-redux"
import Nav from "./Components/Nav.js"
import Footer from "./Components/footer.js"
import store from "./store";
import {HashRouter as Router, Route} from "react-router-dom"
import Home from "./Home"
import Details from './Components/details.js';
import Secload from "./Components/secload"


function App() {
  return (
    
       <Provider store ={store}>
         <Router>
           <div className="container">
            <Nav/>
            <Route exact path="/" component = {Home} />
            <Route exact path="/movie/:id" component={Details} />
           <Footer />
           </div>
           </Router>
       </Provider>
   
 
  );
}


export default App;
