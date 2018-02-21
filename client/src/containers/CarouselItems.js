import React, {Component} from 'react';

import MoviePoster from './MoviePoster';

export default class CarouselItems extends Component {

  render() {
    const renderMovie = this.props.item.map(movie => {
      return <MoviePoster
              key={movie.uuid}
              movie={movie}
              updateList={this.props.updateList} />
    })
    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? "carousel-item carousel-item-active"
            : "carousel-item"
        }
      >
      {renderMovie}

      </li>
    );
  }
}
