import React from 'react';
import { directors } from '../data';

const Directors = () => {

  var list = directors.map((director, index)=>{
    return (<div key={index}>
      <strong>{director.name}</strong>
      <ul>{director.movies.map((movie, index)=>{return (<li key={index}>{movie}</li>)})}</ul>
      </div>)})

  return (
    <div>
      <h1>Directors Page</h1>
      {list}
    </div>
  );
}

export default Directors
