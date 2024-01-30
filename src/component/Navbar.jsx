import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname, " home");
  const path = location.pathname.split("/")[1];

  return (
    <div>
      
      <nav className="h-[3.3rem] bg-[#d14242] flex justify-between items-center px-4">
        <div className="logo text-white text-xl font-semibold h-full flex items-center ">
          Header
        </div>

        <div className="Links flex justify-center gap-2 items-center h-[100%]">
       
          <Link to="/"
            className={`${location.pathname === "/" ? 'bg-[#b33131]' : ''} text-xs h-[100%] flex items-center text-white font-normal px-2`} 
          >
            <li className={`text-xs list-none  text-white font-normal`}>
              
              First Component
            </li>
          </Link>
          <Link
            to="/secondComp"
            className={`${path === "secondComp" ? 'bg-[#b33131]' : ''} text-xs h-[100%] flex items-center text-white font-normal px-2`}
          >
            
            <li
              className={`text-xs list-none  flex items-center text-white font-normal`}
            >
              Second Component
            </li>
          </Link>
          <Link
            to="/thirdComp"
            className={`${path === "thirdComp" ? 'bg-[#b33131]' : ''} text-xs h-[100%] flex items-center text-white font-normal px-2`}
          >
            
            <li
              className={`text-xs list-none  flex items-center text-white font-normal`}
            >
              Third Component
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
