import React from "react";
import { ThemeProvider, TextField } from "@mui/material";
import { useStateContext } from "../../contexts/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { theme } = useStateContext();

  return (
    <div className="relative mx-auto w-4/5 min-h-[24rem] bg-yellow-900 py-4 px-3 flex flex-col items-center justify-center rounded-full ">
      <Link
        to="/sign-up"
        className="absolute right-0 text-4xl h-full w-1/5 flex items-center justify-center cursor-pointer hover:bg-orange-200/30 text-yellow-600 rounded-tr-full rounded-br-full"
      >
        <div>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </div>
      </Link>
      <div className=" text-center font-semibold text-2xl text-orange-200 mb-4">
        Đăng nhập
      </div>
      <ThemeProvider theme={theme}>
        <div className="w-1/2 flex ">
          <TextField
            label="Username"
            variant="outlined"
            className="w-full even:my-5 text-orange-200"
            sx={{ input: { color: "#E3CAA5" } }}
          />
        </div>
        <div className="w-1/2 flex my-3">
          <TextField
            label="Password"
            variant="outlined"
            className="w-full even:my-5 text-orange-200"
            sx={{ input: { color: "#E3CAA5" } }}
          />
        </div>
      </ThemeProvider>
      <div className="flex justify-between w-1/2">
        <div className="text-orange-200 text-md hover:text-yellow-600">
          Đăng ký tài khoản{" "}
        </div>
        <div className="text-orange-200 text-md hover:text-yellow-600">
          Quên mật khẩu?
        </div>
      </div>
      <div className="bg-orange-200 w-1/2 flex items-center justify-center h-12 rounded-full mt-5">
        <div className="text-yellow-900">Đăng nhập</div>
      </div>
    </div>
  );
};

export default SignIn;
