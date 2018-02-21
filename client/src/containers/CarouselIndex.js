import React, { Component } from 'react';

export default class CarouselIndex extends Component {
  render() {
    return (
      <li>
        <a className={
            this.props.index === this.props.activeIndex
              ? "carousel-indicator carousel-indicator-active"
              : "carousel-indicator"
          }
          onClick={this.props.toPage}
        />
      </li>
    );
  }
}
