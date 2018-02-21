import React, { Component } from 'react';
import '../App.css';

export default class Movielist extends Component {

  render () {
    return (
      <div className="carousel-item-wrapper">
        <div className="carousel-poster">
          <img className="" src={this.props.movie.itemData.image} alt={this.props.movie.name} />
          <div className="favorite" onClick={() => this.props.updateList(this.props.movie)}>
            <i className={this.props.movie.rating === "like" ? "material-icons md-24 md-light" : "material-icons md-24 md-gray"}>favorite</i>
          </div>
          <div className="playButton">
            {this.props.movie.itemData.platforms.length ? <a href={this.props.movie.itemData.platforms[0].url} target="_blank"><i className="material-icons md-40 md-light play_circle">play_circle_outline</i></a> : null }
          </div>
        </div>
        <div className="info-container">
          <p className="carousel-item-name">
          {this.props.movie.name}
          </p>
          <p className="carousel-item-definingInfo">
          {this.props.movie.itemData.definingInfo}
          </p>
        </div>
      </div>
    );
  }
}
