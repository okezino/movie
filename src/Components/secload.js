import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchmovie,changestate} from "../Actions/searchActions"

class Secload  extends Component {

    render() { 
            const {movie} = this.props
        return (
            <React.Fragment>
      <div className="container">
 <div className="row ">
 <div className="col-md-4 card card-body">
  <img src={movie.Poster} className="thumbnail" alt= "Movie Poster" />
        </div>
 <div className = "col-md-8">
   <h2>  {movie.Title}</h2>
   <ul className="list-group">
     <li className="list-group-item">
       <strong>Released Year</strong> {movie.Year}
     </li>
     <li className="list-group-item">
       <strong>Movie Rating</strong> Rating
     </li>
     <li className="list-group-item">
       <strong>IMDB Rating</strong> 
     </li>
     <li className="list-group-item">
       <strong>Director</strong> {movie.Director} 
     </li>
     <li className="list-group-item">
       <strong>Write</strong> {movie.Writer}
     </li>
     <li className="list-group-item">
       <strong>Actors</strong> {movie.Actors}
     </li>
   </ul>

 </div>
 </div>
 </div>
</React.Fragment>
          );
    }
}

const  mapStateToProps =(state)=>({
    movie : state.movies.movie,
    loading : state.movies.loading
   })
   export default  connect(mapStateToProps,{fetchmovie,changestate})(Secload);