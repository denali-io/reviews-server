/* eslint-disable no-useless-constructor */
import React from 'react';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import ListHeader from './ListHeader.jsx';
import '../styles/styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sort: '',
    };
    this.searchReviews = this.searchReviews.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    $.get('http://localhost:5000/restaurants/100?sort_by=date_desc', (results) => {
      this.setState({
        data: results,
      });
    });
  }

  searchReviews(value) {
    $.get(`http://localhost:5000/restaurants/100?sort_by=date_desc&q=${value}`, (results) => {
      this.setState({
        data: results,
      });
    });
  }

  sortHandler(value) {
    let sortQuery;
    if (value === '') {
      console.log('nothing');
    } else if (value === 'Highest Rated') {
      sortQuery = 'sort_by=rating_desc';
      $.get(`http://localhost:5000/restaurants/100?${sortQuery}`, (results) => {
        this.setState({
          data: results,
        });
      });
    } else if (value === 'Lowest Rated') {
      sortQuery = 'sort_by=rating_asc';
      $.get(`http://localhost:5000/restaurants/100?${sortQuery}`, (results) => {
        this.setState({
          data: results,
        });
      });
    } else if (value === 'Newest First') {
      this.getReviews();
    } else if (value === 'Oldest First') {
      sortQuery = 'sort_by=date_asc';
      $.get(`http://localhost:5000/restaurants/100?${sortQuery}`, (results) => {
        this.setState({
          data: results,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <ListHeader sortHandler={this.sortHandler} searchHandle={this.searchReviews} />
        <ReviewList data={this.state.data} />
      </div>
    );
  }
}

export default App;
