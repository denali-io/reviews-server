import React from 'react';
import '../styles/Pagination.styles.scss';


class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this.selectNext = this.selectNext.bind(this);
    this.selectPrevious = this.selectPrevious.bind(this);
  }

  selectNext() {
    this.props.next();
  }
  selectPrevious() {
      this.props.previous();
  }

  render() {
    console.log(this.props.info.currentPage, Math.ceil(this.props.info.totalReviews/20));
    const total = (this.props.totalReviews);
    const numOfPages = Math.ceil(total / 20);
    const linkArray = [];
    let i;
    for (i = 1; i <= numOfPages; i += 1) {
      linkArray.push(<a key={i}>{i}</a>);
    }
    if (this.props.info.currentPage === 1) {
      return (
        <div className="pagination">
          {linkArray}
          <a onClick={this.selectNext}>&raquo;</a>
        </div>
      );
    } else if (this.props.info.currentPage === Math.ceil(this.props.info.totalReviews/20)) {
        console.log('hey')
      return (
        <div className="pagination">
          <a onClick={this.selectPrevious} >&laquo;</a>
          {linkArray}
        </div>
      )
    } 
    return (
      <div className="pagination">
        <a onClick={this.selectPrevious} >&laquo;</a>
        {linkArray}
        <a onClick={this.selectNext}>&raquo;</a>
      </div>

    );
  }
}

export default Pagination;
