import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    console.log("modal open");
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    console.log("modal will close");
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("click", this.handleClick);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleClick = (e) => {
    console.log(e.target.nodeName);
    if (e.target.nodeName === "DIV") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="modalBackUp">
        <img
          className="modalImg"
          alt=""
          src={this.props.modalSrc}
          width="500"
          height="500"
        />
      </div>
    );
  }
}

export default Modal;
