import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { showsContext } from "../showsContext";
export const Details = () => {
  const { shows } = useContext(showsContext);
  const { name } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const show = shows?.find((x) => x.name === name);
    if (show) {
      setDetails(show);
    }
  }, [name, shows]);

  console.log(details);
  return (
    <div className="flex flex-col  p-20 w-full h-screen text-white bg-gradient-to-b from-purple-950 to-black">
      <div className="flex flex-row justify-center ">
        <img className=" rounded" src={details?.image?.medium} alt="showName" />
        <div className="flex mt-10 flex-col pl-10">
          <div className="flex">
            <h1 className="mr-5 text-purple-300 font-bold">{details?.name}</h1>
            <p className="text-gray-500 text-sm mt-[2px]">
              ( {details?.premiered} )
            </p>
          </div>
          <p className="flex mt-2 text-sm">{details?.type}</p>
        </div>
      </div>
      <div className="justify-center flex items-center flex-col mt-5 gap-4">
        <div className="flex gap-16">
          <h1 className="text-sm">
            <span>Genres:</span> {details?.genres}
          </h1>
          <p className="text-sm">
            <span>language:</span> {details?.language}
          </p>
        </div>
        <p className="px-20 mb-8 ">
          <span>Summary:</span> {details?.summary}
        </p>
        <div className="flex">
          <h1>
            <span> schedule:</span> {details?.schedule?.days}
          </h1>
          <p className="text-gray-400 ml-4 mt-1">
            {" "}
            ({details?.schedule?.time})
          </p>
        </div>
      </div>
    </div>
  );
};
