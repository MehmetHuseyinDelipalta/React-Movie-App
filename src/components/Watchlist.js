import React from "react";
import { GlobalContext } from "../context/GlobalState";

const Watchlist = () => {
  const { watchlist } = React.useContext(GlobalContext);
  return (
    <div>
      {watchlist.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  );
};

export default Watchlist;
