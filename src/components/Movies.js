import React from 'react';
import { movies } from '../data';

const Movies = () => {

  var list = movies.map((movie, index)=>{
    return (<div key={index}>
      <strong>{movie.title}</strong>
      <p>{movie.time} minutes long</p>
      <ul>{movie.genres.map((genre, index)=>{return (<li key={index}>{genre}</li>)})}</ul>
      </div>)})

  return (
    <div>
        <h1>Movies Page</h1>
        {list}
    </div>
  );
};

export default Movies;
