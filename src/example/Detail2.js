import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export default function Detail2(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const getMoives = async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);

    }

    useEffect(()=>{
        getMoives();
    }, [])

    return(
        <div>
            <h1>{detail.title_long}</h1>
            <img src={detail.background_image} />
            <p>download count:{detail.download_count}</p>
            <p>language : {detail.language}</p>
            <p>rating : {detail.rating}</p>
        </div>
    )
}