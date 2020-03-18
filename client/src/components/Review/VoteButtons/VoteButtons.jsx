import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam, faGrin, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './VoteButtons.scss';

const VoteButtons = ( {review} ) => {
  let funnyCount;
  let coolCount;
  let usefulCount;
  if (review.funny_count === 0) {
    funnyCount = '';
  } else {
    funnyCount = review.funny_count
  }
  if (review.cool_count === 0) {
    coolCount = '';
  } else {
    coolCount = review.cool_count
  }
  if (review.useful_count === 0) {
    usefulCount = '';
  } else {
    usefulCount = review.useful_count
  }
  return (
    <span>
      <button type="submit">
        <FontAwesomeIcon icon={faLightbulb} useful-test="useful" />
        <span btn-test="useful" className="btnText">{`Useful ${usefulCount}`}</span>
      </button>
      <button type="submit">
        <FontAwesomeIcon icon={faGrin} funny-test="funny" />
        <span btn-test="funny" className="btnText">{`Funny ${funnyCount}`}</span>
      </button>
      <button type="submit">
        <FontAwesomeIcon icon={faGrinBeam} cool-test="cool" />
        <span btn-test="cool" className="btnText">{`Cool ${coolCount}`}</span>
      </button>
    </span>
  );
}

export default VoteButtons;
