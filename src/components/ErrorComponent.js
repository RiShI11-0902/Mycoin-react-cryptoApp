import React from "react";
import { BiError } from "react-icons/bi";
function ErrorComponent({ message }) {
  return (
    <>
      <div className="w-fit space-x-6 p-5 text-3xl flex items-center mx-auto">
        <div>
          <BiError />
        </div>
        <h3 className="mx-auto w-fit text-3xl">{message}</h3>
      </div>
    </>
  );
}

export default ErrorComponent;
