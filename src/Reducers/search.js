import {SEARCH_MOVIE,FETCH_MOVIES, FETCH_MOVIE,LOADING} from "../Actions/types";



const initialState = {text: "", movies : [], loading: false, movie : []}

export default (state = initialState,action)=> {
    switch(action.type){

        case  SEARCH_MOVIE: 
       return {...state, text: action.payload,loading: false};
       break;
       case  FETCH_MOVIES: 
       return {...state, movies: action.payload,loading: false};
       break;
       case  LOADING: 
       return {...state, loading: true};
       break;
       case  FETCH_MOVIE: 
       return {...state, movie: action.payload, loading:false};
       break;
       default :
       return state
    }
}