import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export default function Detail(){

    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState([]);

    const { id } = useParams();
    // const id = useParams().id

    const getMovie = async ()=>{
     const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setDetail(json.data.movie);
            setLoading(true);

    };

    useEffect(()=>{
        getMovie();    
    }, []);
    console.log(detail);

    return( 
        <div>
            {loading ? 
            <div>
            <h2>{detail.title_long}</h2> 
            <img src={detail.background_image} />
            <p>language: {detail.language}</p>
            <p>upload : {detail.date_uploaded}</p>
            <p>rating : {detail.rating}</p>
            <ul>
                {detail.torrents.map((item)=> <li>{item.url}</li>)}
            </ul>
            </div>
             : null}
        </div>
    )

}