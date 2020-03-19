import React from 'react';
import '../styles/ReviewList.styles.scss';
import Review from './Review/Review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'default',
      data: [],
    };
  }


  render() {
    const dataArray = this.props.data;
    const reviewArray = dataArray.map((review) => (
      <div className="reviewItem">
        <Review review={review} />
      </div>
    ));
    console.log(reviewArray);
    return (
      <div>
        {reviewArray}
      </div>
    );
  }
}

export default ReviewList;
