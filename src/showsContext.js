import React, { createContext, useEffect, useState } from "react";

export const showsContext = createContext([]);

export const ShowsContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const q = data.map((x) => ({
          ...x.show
        }));
        setShows(q);
      });
  }, []);
  //console.log(shows)
  const value = {
    shows,
    setShows
  };

  return (
    <showsContext.Provider value={value}>{children}</showsContext.Provider>
  );
};
