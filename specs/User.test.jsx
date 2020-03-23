import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCamera, faStar } from '@fortawesome/free-solid-svg-icons'
import User from '../client/src/components/Review/User/User.jsx';

describe('User Component', () => {
  const review = {
    name: 'Velda B.',
    profile_pic: 'http://lorempixel.com/60/60/people',
    reviews: 623,
    friends: 282,
    photos: 592,
    location: 'North Luz, ID',
  };
  const component = shallow(<User review={review} />);
  it('displays the users profile picture', () => {
    const hasImage = component.contains(<img className="profilePic" src={review.profile_pic} alt="nothing" />);
    expect(hasImage).toBe(true);
  });
  it('displays the users name and location in bold font', () => {
    const showsUserName = component.contains(<strong>{review.name}</strong>);
    const showsLocation = component.contains(<strong>{review.location}</strong>);
    expect(showsUserName && showsLocation).toBe(true);
  });
});

describe('User Statistics', () => {
  const review = {
    name: 'Velda B.',
    profile_pic: 'http://lorempixel.com/60/60/people',
    reviews: 623,
    friends: 282,
    photos: 592,
    location: 'North Luz, ID',
  };
  const component = shallow(<User review={review} />);
  it('displays the correct icons with their corresponding statistic', () => {
    const showsFriendsIconAndStat = component.contains(
      <div>
        <FontAwesomeIcon className="userIcon" icon={faUserFriends} />
        <strong>{`${review.friends} `}</strong>
        friends
      </div>,
    );
    expect(showsFriendsIconAndStat).toBe(true);
    const showsReviewsIconAndStat = component.contains(
      <div>
        <span className="userIcon">
          <FontAwesomeIcon className="starIcon" icon={faStar} size="xs" />
        </span>
        <strong>{`${review.reviews} `}</strong>
        reviews
      </div>,
    );
    expect(showsReviewsIconAndStat).toBe(true);
    const showsPicIconAndStat = component.contains(
      <div>
        <FontAwesomeIcon className="userIcon" icon={faCamera} />
        <strong>{`${review.photos} `}</strong>
        photos
      </div>,
    );
    expect(showsPicIconAndStat).toBe(true);
  });
});
