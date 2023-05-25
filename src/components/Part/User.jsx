import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../contexts/ContextProvider";
const User = () => {
  const { isSignIn, setIsSignIn } = useStateContext();
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <div className="" onClick={() => setActive((prev) => !prev)}>
        <FontAwesomeIcon
          icon={faUser}
          className="text-yellow-900 dark:text-orange-200 text-2xl p-3 mr-10 rounded-full hover:bg-yellow-900 dark:hover:bg-yellow-600 hover:text-orange-200 hover:cursor-pointer drop-shadow-xl"
        />
      </div>
      <div
        className={`absolute top-full min-w-[10rem] bg-yellow-900 dark:bg-grey-700 z-20 px-3 py-2 right-1/2 rounded-lg ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="px-3 py-2 text-orange-200 hover:bg-yellow-600 rounded-lg font-medium drop-shadow-lg  even:my-2">
          <Link to={"/sign-in"}>
            <span className="mr-2">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            Đăng nhập
          </Link>
        </div>
        <div className="px-3 py-2 text-orange-200 hover:bg-yellow-600 rounded-lg font-medium drop-shadow-lg  even:my-2">
          <Link to={"/sign-up"}>
            <span className="mr-2">
              <FontAwesomeIcon icon={faAddressCard} />
            </span>{" "}
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
