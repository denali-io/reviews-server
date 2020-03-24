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
    this.selectNewPage = this.selectNewPage.bind(this);
  }

  selectNext() {
    this.props.next();
  }

  selectPrevious() {
    this.props.previous();
  }

  selectNewPage(e) {
    this.props.select(Number(e.target.id));
  }

  render() {
    const total = (this.props.totalReviews);
    const numOfPages = Math.ceil(total / 20);
    const linkArray = [];
    let i;
    for (i = 1; i <= numOfPages; i += 1) {
      if (i === this.props.info.currentPage) {
        linkArray.push(<a id={i} className="currentPge" key={i}>{i}</a>);
      } else {
          linkArray.push(<a id={i} className="pageLink"onClick={this.selectNewPage} key={i}>{i}</a>);
      }
    }
    if (total === 0) {
      return (
        <div />
      );
    }
    if (total < 20) {
      return (
        <div>Page 1 of 1</div>
      );
    }
    if (this.props.info.currentPage === 1) {
      return (
        <div className="pagination">
            
                <p className="pageText">Page {this.props.info.currentPage} of {numOfPages}</p>
                <div className="linkss">
            {linkArray}
            <a className="pageLink" onClick={this.selectNext}>Next &raquo;</a>
            </div>
        </div>
      );
    } if (this.props.info.currentPage === Math.ceil(this.props.info.totalReviews / 20)) {   
      return (
        <div className="pagination ">
            
            <p className="pageText">Page {this.props.info.currentPage} of {numOfPages}</p>
            <div className="linkss">
          <a className="pageLink" onClick={this.selectPrevious}>&laquo; Previous</a>
          {linkArray}
          </div>
        </div>
      );
    }
    return (
      <div className="pagination">
         
        <p className="pageText">Page {this.props.info.currentPage} of {numOfPages}</p>
        <div className="linkss"> 
        <a className="pageLink" onClick={this.selectPrevious}>&laquo; Previous</a>
        {linkArray}
        <a className="pageLink" onClick={this.selectNext}>&raquo; Next</a>
        </div>
      </div>

    );
  }
}

export default Pagination;
