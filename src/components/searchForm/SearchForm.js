import React, { Component } from "react";
import axios from "axios";
// import ImageGallery from "../imageGallery/ImageGallery";
// import Button from "../button/LoadMoreButton";

class SearchForm extends Component {
  state = {
    query: "",
    page: 0,
    searchQuery: "",
  };

  fetchFn = () => {
    const { query, page } = this.state;
    if (query) {
      axios
        .get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=17517629-df8f69dc57338ff5eaff7a83f&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => {
          this.props.addImages(response.data.hits);
          this.setState((prevState) => ({ page: prevState.page + 1 }));
        });
    }
  };

  handleSubmitOnSearch = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.query);
    this.setState({ query: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmitOnSearch}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              value={this.state.query}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              name="query"
            />
          </form>
        </header>
        {/* <ImageGallery images={this.props.images} */}
        {/* /> */}
      </>
    );
  }
}

export default SearchForm;
