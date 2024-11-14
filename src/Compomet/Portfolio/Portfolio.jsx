import React, { useState } from "react";
import poert1 from "../../assets/poert1.jpeg";
import port2 from "../../assets/port2.jpeg";
import port3 from "../../assets/port3.jpeg";

export default function Portfolio() {
  const [showImage, setShowImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpenImage = (image) => {
    setCurrentImage(image);
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
    setCurrentImage(null);
  };

  return (
    <div className="py-12">
      <div className="portfolio py-6">
        <h1 className="uppercase text-5xl font-bold text-center mx-auto w-fit">
          Portfolio Component
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-4">
        {[poert1, port2, port3, poert1, port2, port3].map((image, index) => (
          <div key={index}
            className="content flex items-center justify-center relative flex-col">
            <img src={image} alt="" className="w-full" />
            <div className="plus flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 cursor-pointer"
              onClick={() => handleOpenImage(image)}>
              <i className="fa-solid fa-plus text-9xl text-white"></i>
            </div>
          </div>))}
      </div>

      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
          onClick={handleCloseImage}>
          <img src={currentImage} alt="Expanded view" className="w-1/2" />
        </div>)}
    </div>
  );
}
