import React from 'react';
import Rating from './Rating.jsx'

class AddRating extends React.Component{
    constructor() {
        super();
    }

    render() {
      return (
        <div>
          <Rating />
        </div>
      );
    }
  };

export default AddRating;
