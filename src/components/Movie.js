import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, title, poster_path, overview, genre_ids}) {
  return (
    <div>
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <img
        src={poster_path}
        style={{ width: "200px" }}
        alt={title}
      />
      <p>{overview}</p>
      <ul>
        {genre_ids.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movie;
