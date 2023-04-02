import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail({ getMovieData }) {
  const { movieId } = useParams();
  const movie = getMovieData(movieId);
  return (
    <div className="desc">
    <div
      className="card category-card"
      style={{ backgroundImage: `url(${movie.img})` }}
    >
      <h2>{movie.title}</h2>
      {/* <h2>{movie.descrShort}</h2> */}
      {/* <p className="description">{movie.descrShort}</p> */}
    </div>
    <h2>{movie.descrShort}</h2>

    </div>
  );
}

export default MovieDetail;
