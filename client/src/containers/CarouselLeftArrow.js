import React, { Component } from 'react';

export default class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel-arrow carousel-arrow-left"
        onClick={this.props.previosPage}
      >
        <span><i className="material-icons md-32 md-light">keyboard_arrow_left</i></span>
      </a>
    );
  }
}
