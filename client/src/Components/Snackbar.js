import React, { useContext } from "react";
import { SnackbarContext } from "../SnackbarContext";
import { useNavigate } from "react-router-dom";

function Snackbar() {
  const { snackbarText, setSnackbarText } = useContext(SnackbarContext);
  const navigate = useNavigate();

  function handleClose() {
    setSnackbarText({
      ...snackbarText,
      open: false,
    });
  }

  return (
    <>
      {snackbarText.open && (
        <div
          className={`fixed z-50 bottom-4 left-0 right-0 mx-4 w-auto max-w-md py-3 px-4 ${
            snackbarText.success ? "bg-green-600" : "bg-red-600"
          } text-white flex items-center justify-between transition-all duration-300`}
        >
          <div>
            <span>{snackbarText.message}</span>{" "}
            {snackbarText.linkText && (
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                {snackbarText.linkText}
              </span>
            )}
          </div>

          <button
            onClick={handleClose}
            className="text-white hover:text-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.147a.5.5 0 10-.708.708L9.293 10l-4.147 4.146a.5.5 0 00.708.708L10 10.707l4.146 4.147a.5.5 0 00.708-.708L10.707 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Snackbar;
