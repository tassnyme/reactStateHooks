import React from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import Filter from './Filter';

function MovieList(props) {
    
  return (
    <div className='movies'>
      
      {props.movies ? props.movies.map((item,index)=><div className='aaa'><MovieCard movie={item} key={index}></MovieCard></div>) : props.array.map((item,index)=><div className='aaa'><MovieCard movie={item} key={index}></MovieCard></div>)
      
    }
      
    
    </div>
  )
}

export default MovieList
