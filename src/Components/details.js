import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchmovie,changestate} from "../Actions/searchActions"
import Spin from "./spinner";
import Secload from "./secload"


class Details  extends Component {
  
     componentDidMount(){
        this.props.fetchmovie(this.props.match.params.id)
        this.props.changestate()
    }
    
    render() { 
      const {loading} = this.props;
    
        return (  <div className="container">
                { loading ? <Spin /> : <Secload />}
        </div>
        )}
} 
 
const  mapStateToProps =(state)=>({
 movie : state.movies.movie,
 loading : state.movies.loading
})
export default  connect(mapStateToProps,{fetchmovie,changestate})(Details);