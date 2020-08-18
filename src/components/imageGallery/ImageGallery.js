import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, modalOpen, openModalFn }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            modalOpen={modalOpen}
            openModalFn={openModalFn}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
