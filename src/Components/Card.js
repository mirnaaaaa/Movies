import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ show }) => {
  return (
    <div className="m-1 ">
      <Link to={`/details/${show.name}`}>
        <div className="flex justify-center items-center">
          <img src={show.image.medium} alt="showName" />
        </div>
        <p className=" my-1 ">{show.name}</p>
      </Link>
    </div>
  );
};
