import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movies({ id, title, medium_cover_image, summary, genres }){

    return(
        <div>
        <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
        <img src={medium_cover_image}/>
        <p>summary : {summary}</p>
          <ul>
            <strong>genres👇</strong>{genres.map((g)=>
            <li key={g}>{g}</li>
              )}
          </ul>
      </div>
      )
}

Movies.propTypes={
    id : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};