import React from 'react';
import { connect } from 'react-redux';
import { CardNews } from './CardNews';

const NewsGrid = ({ news, hasError, isLoading }) => {
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

  return (
    <div className="card-deck justify-content-center">
      <div className="row">
        {news.map((element, i) => (
          <CardNews {...element} key={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
  };
};

export default connect(mapStateToProps, null)(NewsGrid);
