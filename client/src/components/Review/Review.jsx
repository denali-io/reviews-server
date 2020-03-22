import React from 'react';
import RatingBar from './RatingBar/RatingBar.jsx';
import VoteButtons from './VoteButtons/VoteButtons.jsx';
import User from './User/User.jsx';
import CheckIn from './CheckIn/CheckIn.jsx';
import './Review.scss';

const spanStyle = {
  position: 'relative',
  bottom: 85,
  left: 275,

};

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      cool: false,
      useful: false,
      funny: false,
    });
    this.voteClick = this.voteClick.bind(this);
  }

  voteClick(event) {
    if (event === 'useful') {
      let newStatus = this.state.useful
      this.setState({
        useful: !newStatus,
      });
    }
    if (event === 'funny') {
      let newStatus = this.state.funny
      this.setState({
        funny: !newStatus,
      });
    }
    if (event === 'cool') {
      let newStatus = this.state.cool
      this.setState({
        cool: !newStatus,
      });
    }
    this.props.updateVote(event, this.props.review);
  }

  render() {
    let date = `${this.props.review.date} `;
    date = date.split('');
    const year = date[0] + date[1] + date[2] + date[3];
    let month;
    if (date[4] === '0') {
      month = date[5];
    } else {
      month = date[4] + date[5];
    }
    const day = date[6] + date[7];
    const formattedDate = [month, day, year].join('/');
    let currentVoteStatus = this.state;
    return (
      <div>
        <User review={this.props.review} />
        <span style={spanStyle}>
          <RatingBar rating={this.props.review.rating} />
          <span>{formattedDate}</span>
          <CheckIn review={this.props.review} />
          <p className="reviewBody">
            {this.props.review.body}
          </p>
          <VoteButtons status={currentVoteStatus} updateVote={this.voteClick} review={this.props.review} />
        </span>

      </div>
    );
  }
}


export default Review;
