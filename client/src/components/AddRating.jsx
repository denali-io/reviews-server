import React from 'react';
import Rating from './Rating.jsx';
import '../styles/AddRating.styles.scss';

class AddRating extends React.Component{
    constructor() {
        super();
    }

    render() {
      return (
        <div className="reviewContainer">
          <Rating />
          <hr/>
          <div className="addReviewLink">Start your review of <strong>this restaurant</strong>.</div>
        </div>
      );
    }
  };

export default AddRating;
