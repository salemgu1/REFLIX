import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";
import MovieDetail from "./components/MovieDetail";
import Search from "./components/Search";
import React, { useState } from "react";
import RentedMovies from "./components/rentedMovies";

function App() {
  const [movieSearch,setMovieSearch] = useState("")



  const [movies, setMovieList] = useState([
    {
      id: 0,
      isRented: false,
      title: "Tarzan",
      year: 1999,
      img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
      descrShort:
        "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
    },
    {
      id: 1,
      isRented: false,
      title: "The Lion King",
      img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
      year: 1994,
      descrShort:
        "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
    },
    {
      id: 2,
      isRented: false,
      title: "Beauty and the Beast",
      year: 1991,
      img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
      descrShort:
        "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
    },
    {
      id: 3,
      isRented: false,
      title: "The Sword in the Stone",
      year: 1963,
      img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
      descrShort:
        "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
    },
    {
      id: 4,
      isRented: false,
      title: "Beauty and the Beast",
      year: 2016,
      img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
      descrShort:
        "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
    },
  ]);



  const [rentedMovies, setRentedMovies] = useState([]);


  const updateMovieSearch = (searchMovie)=>{
    setMovieSearch(searchMovie)
    const filterMovies = []
    for (const movie of movies) {
      if(movie.title.includes(searchMovie)){
        filterMovies.push(movie)
      }
    }
    setMovieList(filterMovies)
  }



  const addToRentedList = (movie) => {
    setRentedMovies([...rentedMovies,movie]);
  }
  const removeFromRentedList = (rentedMovie) => {
    console.log("asdasdas");
    console.log(rentedMovie.id);
    const copyRentedList = rentedMovies.filter(movie => movie.id !==rentedMovie.id );
    console.log(copyRentedList);
    // for (const rentedMovie of rentedMovies) {
    //   if(rentedMovie.id!==movie.id){
    //     setRented(movie.id)
    //     copyRentedList.push(movie)
    //   }
    // }
    setRentedMovies(copyRentedList)
    setMovieList([...movies,rentedMovie])
  }
  console.log(rentedMovies);
  

  const [budget, setBudget] = useState(50);

  const updateBudget = (clickType) => {
    const copyBudget = budget;
    if (clickType === "Plus") {
      setBudget(copyBudget - 3);
    } else if (clickType === "Minus") {
      setBudget(copyBudget + 3);
    }
  };

  const setRented = (id) => {
    const updatedList = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, isRented: !movie.isRented };
      } else {
        return movie;
      }
    });
    setMovieList(updatedList);
  };

  const getMovieData = (movieId) => {
    return movies[movieId];
  };

  return (
      <Router>
        <Navbar budget = {budget}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/catalog"
            element={
              <><Search searchValue={movieSearch} updateMovieSearch={updateMovieSearch} />
              <RentedMovies
                rentedMovies={rentedMovies}
                setRented={setRented}
                updateBudget={updateBudget}
                getMovieData={getMovieData}
                addToRentedList = {addToRentedList}
                removeFromRentedList = {removeFromRentedList} />
              <Catalog
                movies={movies}
                setRented={setRented}
                updateBudget={updateBudget}
                getMovieData={getMovieData}
                addToRentedList = {addToRentedList}
                removeFromRentedList = {removeFromRentedList} /></>
            }
          />
          <Route
            path="/movies/:movieId"
            element={<MovieDetail getMovieData={getMovieData} />}
          />
        </Routes>
      </Router>
  );
}

export default App;
