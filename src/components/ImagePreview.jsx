import React from "react";
import Loading from "./Loading.jsx";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
      {/* Original Image Box */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[22rem] h-[340.17px]">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        <div className="flex items-center justify-center h-[300px] bg-gray-100">
          {props.upload ? (
            <img
              src={props.upload}
              alt="original"
              className="max-h-[280px] max-w-full object-contain p-2"
            />
          ) : (
            <span className="text-gray-400">No Image Selected</span>
          )}
        </div>
      </div>

      {/* Enhanced Image Box */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[22rem] h-auto">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
        <div className="flex flex-col items-center justify-center h-[300px] bg-gray-100">
          {props.loading ? (
            <Loading />
          ) : props.enhanced ? (
            <>
              <img
                src={props.enhanced}
                alt="enhanced"
                className="max-h-[220px] max-w-full object-contain p-2"
              />
              {/* 🔽 Download Button */}
              <a
                href={props.enhanced}
                download="enhanced-image.jpg"
                className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Download Image
              </a>
            </>
          ) : (
            <span className="text-gray-400">No Enhanced Image</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;


