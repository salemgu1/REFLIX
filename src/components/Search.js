import React from 'react';
// import './rentedMovies.css';

function Search({searchValue,updateMovieSearch}) {
  const setMovieSearch = (event)=>{
    updateMovieSearch(event.target.value)
  }
    return (
    <div class="input-group">
      <input type="text" value={searchValue} onChange={setMovieSearch}/>
    </div>
      );
}

export default Search;
