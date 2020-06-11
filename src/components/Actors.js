import React from 'react';
import { actors } from '../data';

const Actors = () => {

  var list = actors.map((actor, index)=>{
    return (<div key={index}>
      <strong>{actor.name}</strong>
      <ul>{actor.movies.map((movie, index)=>{return (<li key={index}>{movie}</li>)})}</ul>
      </div>)})

  return (
    <div>
      <h1>Actors Page</h1>
      {list}
    </div>
  );
};

export default Actors;
