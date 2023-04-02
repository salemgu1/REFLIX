import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Movie.css";

function Movie({ movie, setRented, updateBudget,addToRentedList,type,removeFromRentedList}) {
  const { img, title } = movie;

  const setMovieRented = (clickType) => {
    updateBudget(clickType);
    setRented(movie.id);
    if(type==="Catalog"){
      addToRentedList(movie)
    }
    else if(type==="rentedMovies"){
      removeFromRentedList(movie)
    }
  };
  if(type==="Catalog"){
    return (
      <>
        <div className="container">
          <div
            className="card category-card"
            style={{ backgroundImage: `url(${img})` }}
          >
            <button className="plus-btn" onClick={() => setMovieRented("Plus")}>
              +
            </button>
            <Link to={`/movies/${movie.id}`}><h2>{title}</h2></Link>
            <p>{movie.descrShort}</p>
          </div>
        </div>
      </>
    );
  }
  else if(type==="rentedMovies"){
    return (
      <>
        <div className="container">
          <div
            className="card category-card"
            style={{ backgroundImage: `url(${img})` }}
          >
            <button className="plus-btn" onClick={() => setMovieRented("Minus")}>
              -
            </button>
            <Link to={`/movies/${movie.id}`}><h2>{title}</h2></Link>
            <p>{movie.descrShort}</p>
          </div>
        </div>
      </>
    );
  }
  }

export default Movie;
