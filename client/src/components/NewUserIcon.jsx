import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const NewUserIcon = () => {
  return (
        <span>
            <FontAwesomeIcon icon={faUserAstronaut} size="3x"/>
        </span>

  );
};

export default NewUserIcon;
