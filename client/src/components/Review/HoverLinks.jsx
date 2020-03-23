import React from 'react';
import '../../styles/HoverLinks.styles.scss';

function HoverLinks(props) {
  if (props.isHovered) {
    return (
      <div >
        <a className="shareLink">share review</a>
        <a className="embedLink">embed review</a>
      </div>
    );
  }
  return null;
}

export default HoverLinks;
