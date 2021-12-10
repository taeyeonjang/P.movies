import React, { useState, useEffect } from 'react';
import Movies2 from './Movies2';

export default function Prac(){
    
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    /*const getMovies = async()=>{
        const json = await(
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
            .json();

            setMovies(json.data.movies);
            setLoading(true);
        )
    }
    */

    const getMovies = async()=>{
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        );       
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(()=>{
        getMovies();
    }, [])

    console.log(movies);

    return(
        <div>
            <h1>Movies Web</h1>
            {loading ? 'loading...' : 
            movies.map((item)=> 
            <Movies2 
            id={item.id}
            title={item.title} 
            medium_cover_image={item.medium_cover_image} 
            summary={item.summary} 
            genres={item.genres} />
            )}
        </div>
    )
}
