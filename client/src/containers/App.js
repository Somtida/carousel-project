import React, { Component } from 'react';
import Carousel from './Carousel';
import axios from 'axios';
import '../App.css';

export default class App extends Component {


  constructor(props) {
      super(props)
      this.state = {
        movielist: [],
        movies: []
      }

      this.updateList = this.updateList.bind(this);
      this.updatePoster = this.updatePoster.bind(this);
    }

  componentDidMount() {
    axios.get('/items').then(res => {
      var movielist = [];
      while (movielist.length < 4) {
        movielist.push(res.data.splice(0, 4));
      }
      this.setState({ movielist: movielist })
      this.setState({ movies: res.data })
    });
  }

  updateList(movie) {
    let rating = movie.rating === "like" ? null : "like";
    axios.post(`/items/${movie.uuid}`, {rating: rating }).then(res => console.log('success'));

    this.updatePoster(movie.uuid, rating);
  }

  updatePoster(id, rating) {
    let movies = this.state.movies.slice();
    let movielist = this.state.movielist.slice();
    movielist = movielist.map(list => {
      return list.map(item => {
        if(item.uuid === id) {
          item.rating = rating;
          movies.push(item);
          item = movies.shift();
          this.setState({movies});
        }
        return item;
      })
    })
    this.setState({movielist});
  }


  render() {
    return (
      <div className="container">
        <h1 className="top-header">Top recommendations for you</h1>
        <Carousel movielist={this.state.movielist} updateList={this.updateList}/>
      </div>
    );
  }
}
