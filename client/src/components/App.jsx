/* eslint-disable no-useless-constructor */
import React from 'react';
import $ from 'jquery';
import Pagination from './Pagination.jsx';
import ReviewList from './ReviewList.jsx';
import ListHeader from './ListHeader.jsx';
import '../styles/styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sort: 'sort_by=date_desc',
      currentPage: 1,
    };
    this.searchReviews = this.searchReviews.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
    this.selectNextPage = this.selectNextPage.bind(this);
    this.selectPreviousPage = this.selectPreviousPage.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentDidMount() {
    this.getTotalReviews();
    this.getReviews();
  }

  getReviews() {
    // let start = (this.state.currentPage * 20) - 20
    $.get(`http://localhost:5000/restaurants/100?${this.state.sort}`, (results) => {
      this.setState({
        data: results,
      });
    });
  }

  getTotalReviews() {
    $.get('http://localhost:5000/reviews/100', (results) => {
      const total = Number(results);
      this.setState({
        totalReviews: total,
        initialReviews: total,
      });
    });
  }

  selectNextPage() {
    let nextPage = this.state.currentPage;
    nextPage += 1;
    // if (nextPage <= Math.ceil(this.state.totalReviews/20))
    this.setState({
      currentPage: nextPage,
    });
    const start = nextPage * 20 - 20;
    $.get(`http://localhost:5000/restaurants/100?start=${start}&${this.state.sort}`, (results) => {
      this.setState({
        data: results,
      });
    });
    this.scrollToTop();
  }

  selectPreviousPage() {
    let previousPage = this.state.currentPage;
    previousPage -= 1;
    this.setState({
      currentPage: previousPage,
    });
    const start = previousPage * 20 - 20;
    $.get(`http://localhost:5000/restaurants/100?start=${start}&${this.state.sort}`, (results) => {
      this.setState({
        data: results,
      });
    });
    this.scrollToTop();
  }

  selectPage(value) {
    this.setState({
      currentPage: value,
      // start: value * 20 - 20,
    });
    const start = value * 20 - 20;
    $.get(`http://localhost:5000/restaurants/100?start=${start}&${this.state.sort}`, (results) => {
      this.setState({
        data: results,
      });
    });
    this.scrollToTop();
  }

  searchReviews(value) {
    console.log(this.state.sort)
    $.get(`http://localhost:5000/restaurants/100?${this.state.sort}&q=${value}`, (results) => {

      this.setState({
        data: results,
      });
    });
    $.get(`http://localhost:5000/reviews/100?q=${value}`, (results) => {
      let total = Number(results);
      if (isNaN(total)) {
        total = Number(results[0]);
      }
      this.setState({
        totalReviews: total,
        currentPage: 1,
      });
    });
  }


  resetSearch() {
    this.setState({
      currentPage: 1,
      totalReviews: this.state.initialReviews,
      // sort: 'sort_by=date_desc',
    }, this.getReviews);
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
          sort: sortQuery,
          totalReviews: this.state.initialReviews,
        });
      });
    } else if (value === 'Lowest Rated') {
      sortQuery = 'sort_by=rating_asc';
      $.get(`http://localhost:5000/restaurants/100?${sortQuery}`, (results) => {
        this.setState({
          data: results,
          sort: sortQuery,
          totalReviews: this.state.initialReviews,
        });
      });
    } else if (value === 'Newest First') {
      sortQuery = 'sort_by=date_desc';
      $.get(`http://localhost:5000/restaurants/100?${sortQuery}`, (results) => {
        this.setState({
          data: results,
          sort: sortQuery,
          totalReviews: this.state.initialReviews,
        });
      });
      this.setState({
        totalReviews: this.state.initialReviews,
      });
    } else if (value === 'Oldest First') {
      sortQuery = 'sort_by=date_asc';
      $.get(`http://localhost:5000/restaurants/100?${sortQuery}`, (results) => {
        this.setState({
          data: results,
          sort: sortQuery,
          totalReviews: this.state.initialReviews,
        });
      });
    }
  }

  scrollToTop(){
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    return (
      <div>
        <ListHeader reset={this.resetSearch} sortHandler={this.sortHandler} searchHandle={this.searchReviews} totalReviews={this.state.totalReviews}/>
        <ReviewList data={this.state.data} />
        <Pagination select={this.selectPage} previous={this.selectPreviousPage} totalReviews={this.state.totalReviews} next={this.selectNextPage} info={this.state} />
      </div>
    );
  }
}

export default App;
