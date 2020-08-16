import React, { Component } from "react";
import SearchForm from "./components/searchForm/SearchForm";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Button from "./components/button/LoadMoreButton";

class App extends Component {
  state = {
    images: [],
  };
  addImages = (value) => {
    this.setState({ images: [...value] });
  };
  render() {
    const { images } = this.state;
    return (
      <>
        <SearchForm addImages={this.addImages} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button />}
      </>
    );
  }
}

export default App;
