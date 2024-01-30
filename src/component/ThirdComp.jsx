import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import countries from "../Details/Coutries";

const ThirdComp = () => {
  const [time, setTime] = useState();
  const [count, setCount] = useState();
  const [countriesData, setCountriesData] = useState([]);

  function countdown() {
    setCount(time);

    const id = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(id);
      fetchCountriesName();
    }, time * 1000);
  }

  function fetchCountriesName() {
    setTimeout(() => {
      setCountriesData(countries);
      console.log("arr is ", countries)
    }, 2000);
  }

  return (
    <div className="h-[100%] relative z-0 overflow-x-hidden">
      {count != 0 && (
        <div className="btnContent p-5 mt-4 flex justify-start gap-8 ">
          <div className="leftp-5 mt-4 flex justify-start gap-8 items-start flex-col ml-9">
            <label htmlFor="" className=" text-gray-600">
              Enter Countdown Time
              <br />
              <input
                type="number"
                className="p-1 border border-1 border-gray-500 rounded-[4px] text-md w-[18rem] my-1 "
                placeholder="Enter here"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <button
              onClick={() => {
                countdown(time);
              }}
              className="p-2 rounded-lg cursor-pointer bg-[#959ff8] border-[0.1rem_solid_transparent] text-sm px-8 py-2 text-white"
            >
              Start Timer
            </button>
          </div>
        </div>
      )}
      {(countriesData == "" && count == 0) ? (
        <div className="fetch mx-10 text-4xl text-gray-300 font-semibold mt-12">
          <h1>Fetcthing Data...</h1>
        </div>
      ) : (
        <div className="fetch px-6 text-lg text-gray-600 font-semibold mt-12 w-[100%] flex justify-between items-start flex-wrap gap-8 overflow-x-hidden flex-ol">
          {countriesData.map(names=>(
            <h1 className="w-[30%]">{names.name}({names.code}), </h1>
          ))}
        </div>
      )}
      <div className="w-[100%] flex justify-center items-center absolute bottom-0 mb-1  flex-col">
        {count > 0 && (
          <div className="toast rounded-sm bg-[#9ae09a]  text-left p-1.5 px-2 w-[11rem] flex justify-between items-center mb-2">
            <span>{count}</span>
            <span>
              <IoCloseSharp />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdComp;
