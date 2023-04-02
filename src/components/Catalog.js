import React from "react";
import Movie from "./Movie";
import RentedMovies from "./rentedMovies";
// import './Navbar.css';

function Catalog({ movies, setRented, updateBudget,getMovieData,addToRentedList,removeFromRentedList}) {
  return (
    <>
    <h2>Catalog:</h2>
      {movies.map(function (movie) {
        if (movie.isRented === false) {
          return (
            <>
              <Movie
                type={"Catalog"}
                movie={movie}
                setRented={setRented}
                updateBudget={updateBudget}
                getMovieData={getMovieData}
                addToRentedList = {addToRentedList}
                removeFromRentedList = {removeFromRentedList}
              />
            </>
          );
        }
      })}
    </>
  );
}

export default Catalog;
