import React, { Component } from 'react';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';
import CarouselItems from './CarouselItems';
import CarouselIndex from './CarouselIndex';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.toPage = this.toPage.bind(this);
    this.previosPage = this.previosPage.bind(this);
    this.nextPage = this.nextPage.bind(this);

    this.state = { activeIndex: 0 };
  }

  toPage(index) {
    this.setState({ activeIndex: index });
  }

  previosPage(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    let { movielist } = this.props;
    let movielistLength = movielist.length;

    if (index < 1) {
      index = movielistLength;
    }
    index-=1;

    this.setState({ activeIndex: index });
  }

  nextPage(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { movielist } = this.props;
    let movielistLength = movielist.length - 1;

    if (index === movielistLength) {
      index = -1;
    }

    index+=1;

    this.setState({ activeIndex: index });
  }

  render() {
    const renderList = this.props.movielist.map((item, index) => {
      return <CarouselItems
          key={index}
          item={item}
          index={index}
          activeIndex={this.state.activeIndex}
          item={item}
          updateList={this.props.updateList} />
    });
   const renderIndicators = this.props.movielist.map((item, index) => {
     return <CarouselIndex
         key={index}
         index={index}
         activeIndex={this.state.activeIndex}
         isActive={this.state.activeIndex===index}
         toPage={e => this.toPage(index)} />
   });

    return (
      <div className="carousel">
        <ul className="carousel-indicators">{renderIndicators}</ul>
        <CarouselLeftArrow previosPage={e => this.previosPage(e)} />
        <ul className="carousel-list">{renderList}</ul>
        <CarouselRightArrow nextPage={e => this.nextPage(e)} />
      </div>
    );
  }
}
