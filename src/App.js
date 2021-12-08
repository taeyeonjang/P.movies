import React, { useState, useEffect } from 'react';
import styles from "./App.module.css";


export default function App(){

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMoives = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
  
    setMovies(json.data.movies);
    setLoading(true);
  };

  useEffect(()=> {
    getMoives();
   }, []);
  console.log(movies);

  return( 
    <div>
      <h1>Movie App</h1>
      {loading ? 
      movies.map((item)=> <div key ={item.id}>
      <h3>{item.title}</h3>
      <img src={item.medium_cover_image}/>
      <p>summary : {item.summary}</p>
        <ul>
          {item.genres.map((g)=>
          <li key={g}>{g}</li>
            )}
        </ul>
      </div>) 
       : <strong>Loading...</strong>}
    </div>
  )
}



