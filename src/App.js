import React, { Component } from "react";
import SearchForm from "./components/searchForm/SearchForm";
import axios from "axios";
import ImageGallery from "./components/imageGallery/ImageGallery";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    modalOpen: false,
  };

  openModalFn = (image) => {
    this.setState({ modalSrc: image.largeImageURL });
    this.setState({ modalOpen: true });
  };

  onClose = () => {
    this.setState({ modalOpen: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ images: [] });
      this.fetchFn();
    }
  }

  fetchFn = () => {
    const { query, page } = this.state;
    if (query) {
      this.setState({ isLoading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=17517629-df8f69dc57338ff5eaff7a83f&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => {
          this.addImages(response.data.hits);
          this.setState((prevState) => ({
            page: prevState.page + 1,
            isLoading: false,
          }));
        });
    }
  };

  addImages = (value) => {
    this.setState({ images: [...this.state.images, ...value] });
  };

  handleSubmit = (query) => {
    this.setState({ query: query, page: 1 });
  };
  render() {
    const { images, isLoading, modalOpen, modalSrc } = this.state;
    return (
      <>
        {modalOpen && <Modal modalSrc={modalSrc} onClose={this.onClose} />}
        <SearchForm
          addImages={this.addImages}
          images={images}
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery
          images={images}
          modalOpen={modalOpen}
          openModalFn={this.openModalFn}
        />

        {isLoading ? (
          <div className="loaderContainer">
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              margin=" 0 auto"
              display="block"
              height={80}
              width={80} //3 secs
            />
          </div>
        ) : (
          ""
        )}

        {images.length > 0 && (
          <button
            className="Button loadMoreBtn"
            type="button"
            onClick={this.fetchFn}
          >
            Load More
          </button>
        )}
      </>
    );
  }
}

export default App;
