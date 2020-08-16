import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
