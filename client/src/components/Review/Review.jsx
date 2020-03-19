import React from 'react';
import RatingBar from './RatingBar/RatingBar.jsx';
import VoteButtons from './VoteButtons/VoteButtons.jsx';
import User from './User/User.jsx';
import CheckIn from './CheckIn/CheckIn.jsx';
import './Review.scss';

const spanStyle = {
  position: 'relative',
  bottom: 85,
  left: 225,
};
const Review = ({ review }) => {
  let date = `${review.date} `;
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

  return (
    <div>
      <User review={review} />
      <span style={spanStyle}>
        <RatingBar rating={review.rating} />
        <span>{formattedDate}</span>
        <CheckIn review={review} />
        {/* <div>
          insert check-in icon
          <span>{checkIns}</span>
        </div> */}
        <p className="reviewBody">
          {review.body}
        </p>
        <VoteButtons review={review} />
      </span>

    </div>
  );
};

export default Review;
