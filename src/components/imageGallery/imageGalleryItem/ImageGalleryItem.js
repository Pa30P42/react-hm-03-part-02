import React, { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li
        className="ImageGalleryItem"
        onClick={() => {
          this.props.openModalFn(this.props.image);
        }}
        // data-id={this.props.image.id}
      >
        <img
          src={this.props.image.webformatURL}
          data-image={this.props.image.largeImageURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
