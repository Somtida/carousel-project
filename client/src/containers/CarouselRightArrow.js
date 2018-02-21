import React, { Component } from 'react';

export default class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel-arrow carousel-arrow-right"
        onClick={this.props.nextPage}
      >
        <span><i className="material-icons md-32 md-light">keyboard_arrow_right</i></span>
      </a>
    );
  }
}
