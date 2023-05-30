import React from "react";
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
const SearchedCard = ({ movie }) => {
  const MovieContext = useMovieContext();

  console.log(`Props = ${movie}`);
  return (
    <>
      <div className="col-md-3 m-2">
        <div class="card bg-dark" style={{ width: "18rem" }}>
          {movie.Poster ? (
            <img class="card-img-top" src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="filler-poster"> </div>
          )}
          <div class="card-body">
            <h3 class="card-title">{movie.Title}</h3>
            {movie.Year ? (
              <h4 className="card-text">Year Of Movie : {movie.Year}</h4>
            ) : (
              "-"
            )}
            <div className="pt-2 d-flex justify-content-between">
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  MovieContext.MoviesDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHLIST,
                    payload: movie,
                  });
                }}
              >
                Add To Watch List
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  MovieContext.MoviesDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHED,
                    payload: movie,
                  });
                }}
              >
                Watched
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedCard;
