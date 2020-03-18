import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCamera, faStar } from '@fortawesome/free-solid-svg-icons';
import './User.scss';
const divStyle = {
    display: 'flex',
    alignItems: 'center',
  };
// const divStyle = {};

const User = ({ review }) => {
  return (
    <div>
      <span style={divStyle}>
        <span className="profilePicContainer">
          <img className="profilePic" src={review.profile_pic} alt="nothing" />
        </span>
        <span className="userInfo">
          <div className="userName">
            <strong>{review.name}</strong>
          </div>
          <strong>{review.location}</strong>
          <div>
            <FontAwesomeIcon className="userIcon" icon={faUserFriends} />
            <strong>{`${review.friends} `}</strong>
            friends
          </div>
          <div>
            <span className="userIcon">
              <FontAwesomeIcon className="starIcon" icon={faStar} size="xs" />
            </span>
            <strong>{`${review.reviews} `}</strong>
            reviews
          </div>
          <div>
            <FontAwesomeIcon className="userIcon" icon={faCamera} />
            <strong>{`${review.photos} `}</strong>
            photos
          </div>
        </span>
      </span>
    </div>

  )
};

export default User;
