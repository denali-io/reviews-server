import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/AddReview.styles.scss';

// class AddReview extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <Rating />
//       </div>
//     );
//   }
// }

class AddReview extends React.Component {
  // propTypes: {
  //   disabled: React.PropTypes.bool
  // }
  constructor() {
    super();
    this.state = {};
  }

  getInitialState() {
    return {
      rating: this.props.rating || null,
      temp_rating: null,
    };
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating,
    });
  }

  star_over(rating) {
    this.state.temp_rating = this.state.rating;
    this.state.rating = rating;

    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating,
    });
  }

  star_out() {
    this.state.rating = this.state.temp_rating;

    this.setState({ rating: this.state.rating });
  }

  render() {
    const stars = [];


    for (let i = 0; i < 5; i++) {
      let klass = 'star-rating__star  starRater';

      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected starRater';
      }

      stars.push(
        <span
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}
        >
          <FontAwesomeIcon className={klass} icon={faStar} data-test="full" />
        </span>,
      );
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}

export default AddReview;
