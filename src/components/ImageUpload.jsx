import React from "react";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadFileHandler(file);
    }
  };

  return (
    <div className="flex justify-center">
      <label
        htmlFor="fileInput"
        className="cursor-pointer flex flex-col items-center justify-center 
          border-2 border-dashed border-gray-300 dark:border-gray-600 
          rounded-xl px-3 py-4 w-[280px] 
          bg-white dark:bg-gray-800 
          shadow-sm dark:shadow-md 
          hover:shadow-md dark:hover:shadow-lg 
          hover:border-blue-300 dark:hover:border-blue-500 
          transition-all duration-200 transform hover:scale-[1.03]"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-blue-500 mb-2 transition-colors duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3.5 3.5M12 12l3.5 3.5M20 12V5a2 2 0 00-2-2H6a2 2 0 00-2 2v7"
          />
        </svg>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Upload Image
        </span>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          JPG/PNG under 5MB
        </p>
      </label>
    </div>
  );
};

export default ImageUpload;
