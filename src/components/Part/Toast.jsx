import React from "react";
import { contextToast } from "../../data/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faWarning,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../contexts/ContextProvider";

const Toast = () => {
  const { showToast } = useStateContext();

  return (
    <div
      className={`z-50 fixed top-4 right-5 bg-amber-900 w-96 h-96 ${
        showToast ? "flex" : "hidden"
      }`}
    >
      slpjdasj
    </div>
  );
};

export default Toast;
