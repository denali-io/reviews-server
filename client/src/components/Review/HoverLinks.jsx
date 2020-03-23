import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import '../../styles/HoverLinks.styles.scss';

function HoverLinks(props) {
  if (props.isHovered) {
    return (
      <div>
        <a className="shareLink">
          <FontAwesomeIcon icon={faShareSquare} className="hoverIcon" />
          Share review
        </a>
        <a className="embedLink">
          <FontAwesomeIcon icon={faChevronLeft} />
          <FontAwesomeIcon icon={faChevronRight} className="hoverIcon" />
          Embed review
        </a>
      </div>
    );
  }
  return null;
}

export default HoverLinks;
