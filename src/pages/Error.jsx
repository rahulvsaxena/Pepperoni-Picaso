import React from "react";
import warning from "../assets/warning.png";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <img src={warning} width="75px" height="75px" className="mx-auto mb-4"/>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Invalid URL 😞
          </h2>
        </div>
    </div>
  );
};

export default Error;
