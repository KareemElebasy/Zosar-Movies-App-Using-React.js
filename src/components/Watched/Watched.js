import React from "react";
import { useMovieContext } from "../context/GlobalContext";

const Watched = () => {
  const MovieContext = useMovieContext();

  return (
    <div className="container py-5 text-center">
      <h2 className="fs-5 pb-3">
        You Have watched awesome movies , we hope you enjoyed with us ...
      </h2>
      <div className="row">
        {MovieContext.watched.map((movie) => {
          return (
            <div className="col-md-4 p-2">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  {movie.Year ? (
                    <h4 className="card-text">Year Of Movie : {movie.Year}</h4>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Watched;
