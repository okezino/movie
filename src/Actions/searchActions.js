import {SEARCH_MOVIE,FETCH_MOVIES, FETCH_MOVIE,LOADING} from "./types";
import axios from "axios";
import {APIKEY} from "../Reducers/APIKEY"

export const Searchmovie = text => dispatch =>{
    
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchmovies = text => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${text}`)
    .then(res=> dispatch({
        type: FETCH_MOVIES,
        payload : res.data.Search
    })).catch(err=>console.log(err))
}
export const fetchmovie = id => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
    .then(res=> dispatch({
        type: FETCH_MOVIE,
        payload : res.data
    })).catch(err=>console.log(err))
}

export const changestate=()=>dispatch=>{
   dispatch({
       type: LOADING,
   })

}