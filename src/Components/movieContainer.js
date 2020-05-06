import React, { Component } from 'react';
import {connect} from "react-redux"
import Moviecard from "./moviecard"


class MovieContainer extends Component {
    state = {  }
    render() { 
        const {movies} = this.props
        let content = ""

        content = movies.length > 0 ? movies.map((movie, index) => (<Moviecard key = {index}  movie={movie} />)) : null;
        return ( <div className ="row">
                 {content}
        </div> );
    }
}
 
const mapStateToProps = (state)=>({
    movies : state.movies.movies
})
export default connect(mapStateToProps)(MovieContainer);