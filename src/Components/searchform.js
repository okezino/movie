import React, { Component } from 'react';
import {Searchmovie,fetchmovies,changestate} from "../Actions/searchActions"
import {connect} from "react-redux"

class Searchform extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }  
    
    onchange = (e)=>{
         this.props.Searchmovie(e.target.value);
        
        
    }
    result = (e)=>{
        e.preventDefault()
           this.props.fetchmovies(this.props.text);
           this.props.changestate()
        
    }
    render() { 
        return ( <div className="container">
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container">
                 <h1 className="display-4 mb-3">
                     <i className="fa fa-search" /> Search for a movie, TV series....
                 </h1>
            <form id="SearchForm " onSubmit={this.result}>
                <input type="text" placeholder=" Search Movies, TV series..." 
                className="form-control" onChange={this.onchange} name="searchtext">
                </input>
                <button  onClick={this.result} className="btn btn-primary btn-bg mt-3" type="button">Search</button>
            </form>     
            </div>
            </div>
        </div>);
    }
}
 const mapStateToProps = (state)=>({
     text : state.movies.text
 })
export default connect(mapStateToProps, {Searchmovie,fetchmovies,changestate})(Searchform)