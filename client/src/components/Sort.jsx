import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sort.styles.scss';

class Sort extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Newest First',
    };
    this.menuClick = this.menuClick.bind(this);
  }
  menuClick() {
      console.log('clicked')
  }

  render() {
    return (
      <span className="sortMenu" onClick={this.menuClick} >
        Sort by
        <strong>{` ${this.state.value} `}</strong>
        <FontAwesomeIcon icon={faSortDown} size="xs" />
      </span>
    );
  }
}
export default Sort;
