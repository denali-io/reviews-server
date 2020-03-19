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
      sort: {
        type: 'date',
        order: 'desc'
      }
    };
    this.searchReviews = this.searchReviews.bind(this);
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

  render() {
    return (
      <div>
        <ListHeader searchHandle={this.searchReviews}/>
        <ReviewList data={this.state.data} />
      </div>
    );
  }
}

export default App;
