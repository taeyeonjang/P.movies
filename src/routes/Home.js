import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';

export default function Home(){

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


  return( 
    <div>
      <h1>Movie App</h1>
      {loading ? 
        movies.map((item)=> (
        <Movies 
        id={item.id}
        key={item.id}
        title={item.title} 
        medium_cover_image={item.medium_cover_image} 
        summary={item.summary} 
        genres={item.genres} />
      )):(
      <strong>Loading...</strong>
      )}
    </div>
  )
}