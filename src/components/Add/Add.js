import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchedCard from "./SearchedCard";
const Add = () => {
  const [searchMovieValue, setSearchMovieValue] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchMovieValue}&apikey=f1659458`)
      .then((res) => {
        if (res.data.Search) {
          console.log(res.data.Search);
          setSearchMovies(res.data.Search);
        }
      })
      .catch((err) => {
        console.log("Error");
      });
  }, [searchMovieValue]);
  return (
    <div>
      <div className="container">
        <form className="d-flex w-75 mx-auto py-5">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search for a Movie"
            aria-label="Search"
            value={searchMovieValue}
            onChange={(e) => setSearchMovieValue(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {searchMovies.length > 0 && (
          <div className="container">
            <div className="row">
              {searchMovies.map((movie) => {
                return <SearchedCard key={movie.imdbID} movie={movie} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
