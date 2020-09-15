import React from 'react';
import { connect } from 'react-redux';

const Card = ({ news, hasError, isLoading }) => {
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
    <div className="row">
      {news.map((report, i) => (
        <div className="col-sm-12 col-md-4 mb-4" key={i}>
          <div className="card mt-4 h-100 mx-auto" style={{ width: '18rem' }}>
            {report.img_url ? (
              <img src={report.img_url} className="card-img-top" alt={i} />
            ) : (
              <img src="https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif" className="card-img-top" alt="img-not-found" />
            )}

            <div className="card-body text-right">
              <p className="card-text text-center">{report.title}</p>
              <h5 className="card-title text-center">{report.category}</h5>
              <a href={report.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-right">
                Ver Más
              </a>
            </div>
          </div>
        </div>
      ))}
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

export default connect(mapStateToProps, null)(Card);
