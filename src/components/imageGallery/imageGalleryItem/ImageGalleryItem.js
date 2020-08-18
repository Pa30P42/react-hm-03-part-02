import React from "react";

const ImageGalleryItem = ({ image }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        data-image={image.largeImageURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
