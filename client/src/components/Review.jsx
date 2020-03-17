import React from 'react';


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
  let checkIns;
  if (review.check_ins === 1) {
    checkIns = '1 check-in';
  } else if (review.check_ins === 0) {
    checkIns = '';
  } else {
    checkIns = `${review.check_ins} check-ins`;
  }
  return (
    <div>
      <div>{formattedDate}</div>
      <div>{checkIns}</div>
      <p>{review.body}</p>
      <button data-test="useful">{`Useful ${review.useful_count}`}</button>
      <button data-test="funny">{`Funny ${review.funny_count}`}</button>
      <button data-test="cool">{`Cool ${review.cool_count}`}</button>
    </div>
  );
};

export default Review;
