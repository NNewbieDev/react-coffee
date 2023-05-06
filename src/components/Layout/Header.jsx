import React from "react";
import { Menu, User } from "../Part";
import { useStateContext } from "../../contexts/ContextProvider";
import { icon } from "../../images";

const Header = () => {
  const { setActiveMenu } = useStateContext();

  return (
    <div className="h-20 w-full flex justify-between items-center shadow-xl ">
      <Menu handleClick={() => setActiveMenu((prev) => !prev)} />
      <div className="icon flex flex-col items-center drop-shadow-xl">
        <img src={icon} alt="" className="h-10 w-10" />
        <div className="text-yellow-900 dark:text-yellow-600 font-bold text-sm">
          BLACK ENERGY
        </div>
      </div>
      <User />
    </div>
  );
};

export default Header;
