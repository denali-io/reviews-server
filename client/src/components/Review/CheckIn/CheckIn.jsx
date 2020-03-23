import React from 'react';
import './CheckIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CheckIn = ({ review }) => {
  let checkIns;
  if (review.check_ins === 1) {
    checkIns = ' 1 check-in';
  } else if (review.check_ins === 0) {
    checkIns = '';
  } else {
    checkIns = ` ${review.check_ins} check-ins`;
  }
  if (review.check_ins === 0 || review.check_ins === null) {
    return (
      <span />
    );
  }
  return (
    <div className="checkIn">
      <FontAwesomeIcon icon={faCheckCircle} className="checkInIcon" />
      <span className="checkInText">{checkIns}</span>
    </div>
  );
};

export default CheckIn;
