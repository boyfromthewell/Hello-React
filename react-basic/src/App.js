import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { __RouterContext } from "react-router";


function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다.";

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
      <Switch>
      <Route path="/movies">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
      </Route>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/users">
        <Users/>
      </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
