import React from "react";
import NotFoundImage from "./images/404.png"; // Path to the image file

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap">
        <img
          src={NotFoundImage}
          alt="Page Not Found"
          className="max-w-md w-full h-auto mb-4 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            404 - Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <button
            style={{ backgroundColor: "rgb(67, 52, 182)" }} // Custom button color
            className="px-6 py-3 text-white font-semibold rounded hover:bg-purple-800"
            onClick={() => (window.location.href = "/")}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
