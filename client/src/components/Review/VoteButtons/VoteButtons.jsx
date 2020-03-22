import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam, faGrin, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './VoteButtons.scss';

const VoteButtons = ( {status, updateVote, review} ) => {
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
  // let currentVoteStatus = status;
  // let usefulButton;
  // if (status.useful && review.useful) {
  //   usefulButton = <button type="submit" className="voteBtn pushed" onClick={() => updateVote('useful')}>
  //   <FontAwesomeIcon icon={faLightbulb} size="lg" useful-test="useful" />
  //   <span btn-test="useful" id="us" className="btnText">{`Useful ${usefulCount + 1}`}</span>
  // </button>
  // } else {
  //   usefulButton = <button type="submit" className="voteBtn" onClick={() => updateVote('useful')}>
  //   <FontAwesomeIcon icon={faLightbulb} size="lg" useful-test="useful" />
  //   <span btn-test="useful" id="us" className="btnText">{`Useful ${usefulCount}`}</span>
  // </button>
  // }

  // IF ALL ARE FALSE, RETURN THIS
  return (
    <span className="btnContainer">
      <button type="submit" className="voteBtn" onClick={() => updateVote('useful')}>
        <FontAwesomeIcon icon={faLightbulb} size="lg" useful-test="useful" />
        <span btn-test="useful" id="us" className="btnText">{`Useful ${usefulCount}`}</span>
      </button>
     
      <button type="submit" className="voteBtn">
        <FontAwesomeIcon icon={faGrin} size="lg" funny-test="funny" />
        <span btn-test="funny" className="btnText">{`Funny ${funnyCount}`}</span>
      </button>
      <button type="submit" className="voteBtn">
        <FontAwesomeIcon icon={faGrinBeam} size="lg" cool-test="cool" />
        <span btn-test="cool" className="btnText">{`Cool ${coolCount}`}</span>
      </button>
    </span>
  );
}

export default VoteButtons;
