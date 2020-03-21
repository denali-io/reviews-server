import React from 'react';
import '../styles/Pagination.styles.scss';


class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let total = (this.props.totalReviews);
    let numOfPages = Math.ceil(total / 20);
    let linkArray = [];
    let i;
    for (i = 1; i <= numOfPages; i += 1) {
        linkArray.push(<a key={i}>{i}</a>);
    }
    
    return (
      <div className="pagination">
        <a>&laquo;</a>
        {linkArray}
        <a>&raquo;</a>
      </div>

    );
  }
}

export default Pagination;
