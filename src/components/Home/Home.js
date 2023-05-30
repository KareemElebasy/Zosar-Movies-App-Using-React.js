import React from "react";
import WatchList from "../WatchList/WatchList";
import Watched from "../Watched/Watched";
import Add from "../Add/Add";
import { useMovieContext } from "../context/GlobalContext";

const Home = () => {
  const MovieContext = useMovieContext();

  return (
    <div className="home-layout py-5">
      <div class="container text-center p-2">
        <h2 className="fs-1 fw-bold">Unlimited movies, TV shows, and more</h2>
        <p className="fs-4">
          Ready to watch? Search to Find Your Favorite Movie Like Spider man or
          harry potter ETC...
        </p>
        <Add />
        {MovieContext.watchlist.length > 0 && <WatchList />}
        {MovieContext.watched.length > 0 && <Watched />}
      </div>
    </div>
  );
};

export default Home;
