import React, { Component } from 'react';
import Spin from "./spinner"
import MovieContainer from "./movieContainer"
import {connect} from "react-redux"


class Load  extends Component {   

    render() { 
        const {loading} = this.props 

        return ( 
            <div className="container">
            {loading ? <Spin/> : <MovieContainer /> }
            </div>
         );
    }
}

const mapStateToProps = (state)=>({
    loading: state.movies.loading
})
export default connect(mapStateToProps)(Load);