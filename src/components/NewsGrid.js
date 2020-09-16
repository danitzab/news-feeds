import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardNews } from './CardNews';
import CardNewsList from './CardNewsList';
import Pagination from './Pagination';

class NewsGrid extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 10,
  };

  render() {
    const { hasError, isLoading, id } = this.props;
    if (hasError) {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <img
                className="img-fluid"
                src="https://cdn.dribbble.com/users/1197927/screenshots/8062981/media/498b9f796d031f3c2370130510d63f2f.gif"
                alt="not-found"
              />
              <h3 className="mt">No se encontrarón resultados</h3>
            </div>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="container-fluid">
          <img src="https://en-coloradosprings.com/wp-content/themes/geocrafttheme-v2/images/ajax_loader.gif" alt="loading" />
        </div>
      );
    }

    const { currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = this.props.news.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div>
        {id ? (
          <div className="mt-4">
            {currentPosts.map((element, i) => (
              <CardNewsList {...element} key={i} />
            ))}
          </div>
        ) : (
          <div className="card-deck justify-content-center">
            <div className="row">
              {currentPosts.map((element, i) => (
                <CardNews {...element} key={i} />
              ))}
            </div>
          </div>
        )}
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={this.props.news.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
  };
};

export default connect(mapStateToProps, null)(NewsGrid);
