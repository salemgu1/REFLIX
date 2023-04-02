import React from "react";
import Movie from "./Movie";
import "./rentedMovies.css";

function RentedMovies({rentedMovies, setRented, updateBudget ,addToRentedList,getMovieData,removeFromRentedList}) {



  return (
    <>
    <h2>Rented:</h2>
      {rentedMovies.map(movie => {
        
                  return (
                    <>
                      <Movie 
                        type={"rentedMovies"}
                        movie={movie}
                        setRented={setRented}
                        updateBudget={updateBudget}
                        getMovieData={getMovieData}
                        addToRentedList = {addToRentedList}
                        removeFromRentedList = {removeFromRentedList}
                      />
                    </>
                  );
      })}
    </>
  );
}
   





  // return (
  //   <div>
  //     {/* <h3>Rented:</h3> */}
  //     <div className="container1">
  //       <Movie
  //         movie={movie}
  //         setRented={setRented}
  //         updateBudget={updateBudget}
  //         addToRentedList = {addToRentedList}
  //       />
  //     </div>
  //   </div>
  // );

export default RentedMovies;
