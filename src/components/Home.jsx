import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

import { enhancedImageAPI } from "../../utlis/enhancedImageApi";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFileHandler = async (file) => {
    const imageURL = URL.createObjectURL(file);
    setUploadedImage(imageURL);
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      console.log("Enhanced image response:", enhancedURL);
      setEnhancedImage(enhancedURL?.image); // ✅ Only set the URL string
    } catch (error) {
      console.log("Error in uploadFileHandler:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Upload Section */}
      <ImageUpload UploadFileHandler={uploadFileHandler} />

      {/* Preview Section */}
      <ImagePreview
        loading={loading}
        upload={uploadedImage}
        enhanced={enhancedImage}
      />
    </div>
  );
};

export default Home;
