import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sort.styles.scss';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      value: 'Newest First',
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(event) {
    let sortBy = (event.target.id);
    this.props.sortHandler(sortBy);
    if (this.state.showMenu === true) {
      this.setState({
        showMenu: false,
        value: event.target.id,
      });
    } else {
      this.setState({
        showMenu: true,
        // value: event.target.id,
      });
    }
  }

  render() {
    if (this.state.showMenu) {
      return (
        <span>
          <div className="container">
            <button type="button" className="button">
              Sort by
              <strong id={this.state.value} onClick={this.menuClick}>{` ${this.state.value} `}</strong>
              <FontAwesomeIcon icon={faSortDown} size="xs" />
            </button>
            <div className="dropdown">
              <ul>
                <li id="Newest First" onClick={this.menuClick}>Newest First</li>
                <li id="Oldest First" onClick={this.menuClick}>Oldest First</li>
                <li id="Highest Rated" onClick={this.menuClick}>Highest Rated</li>
                <li id="Lowest Rated" onClick={this.menuClick}>Lowest Rated</li>
              </ul>
            </div>
          </div>
        </span>
      );
    }
    return (
      <span>
        <div className="container">
          <button type="button" className="button" onClick={this.menuClick}>
            Sort by
            <strong>{` ${this.state.value} `}</strong>
            <FontAwesomeIcon icon={faSortDown} size="xs" />
          </button>
        </div>
      </span>
    );
  }
}
export default Sort;
