import React, { Component } from "react";
import axios from "axios";

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=1&key=17517629-df8f69dc57338ff5eaff7a83f&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => this.props.addImages(response.data.hits));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
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
    );
  }
}

export default SearchForm;
