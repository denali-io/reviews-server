import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Sort from './Sort.jsx';
import '../styles/ListHeader.styles.scss';

class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Search Within Reviews',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    this.props.searchHandle(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Recommended Reviews</h3>
        <input type="text" className="searchBar" value={this.state.value} onChange={this.handleChange} />
        <button type="submit" className="searchBtn" onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={faSearch} className="searchIcon" size="lg" />
        </button>
        <Sort sortHandler={this.props.sortHandler}/>
      </div>
    );
  }
}

export default ListHeader;
