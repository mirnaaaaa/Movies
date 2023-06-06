import React, { useContext } from "react";
import { Card } from "./Card";
import { showsContext } from "../showsContext";
import { NavBar } from "./NavBar";

export const Cards = () => {
  const { shows } = useContext(showsContext);

  return (
    <div className="w-full text-white bg-gradient-to-b from-purple-900 to-gray-500">
      <div className="pb-20">
        <NavBar />
      </div>
      <div className="w-full grid  grid-cols-2 sm:grid-cols-4  gap-3 text-center py-2 px12 ">
        {shows?.map((show) => (
          <div
            key={show.id}
            className="mb-4  mx-3 shadow-md bg-gradient-to-r from-black to-purple-800 hover:scale-105 py-2 rounded-lg duration-500  justify-center  items-center"
          >
            <Card show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};
