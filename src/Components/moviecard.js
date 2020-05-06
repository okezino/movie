import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Moviecard  extends Component {
    state = {  }
    render() { 
        let {movie} = this.props
        return ( 
            
               <div className="col-md-3 mb-5 ">
               <div className ="card card-body bg-dark text-center h-100">
               <img className="w-100 mb-2" src={movie.Poster} alt="Movie cover"/> 
               <h5 className="text-light card-title">
                   {movie.Title} -{movie.Year}
               </h5> 
               <Link to={"/movie/" + movie.imdbID}  class="btn btn-primary">See Details
               <i className=" fa fa-chevron-right" />
               </Link> 
               </div>    

               </div>
        
         );
    }
}
 
export default Moviecard;
