import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { postsPerPage, totalPosts, paginate, nextPage, prevPage } = this.props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <span className="page-link" aria-label="Previous" onClick={() => prevPage()}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </span>
            </li>
            {pageNumbers.map((num) => (
              <li className="page-item" key={num}>
                <span className="page-link" onClick={() => paginate(num)}>
                  {num}
                </span>
              </li>
            ))}

            <li className="page-item">
              <span className="page-link" aria-label="Next" onClick={() => nextPage()}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
