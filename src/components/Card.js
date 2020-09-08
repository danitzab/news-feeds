import React from 'react';
import { connect } from 'react-redux';


const Card = ({ news, hasError, isLoading }) => {
  // console.log('Props', news);
  if (hasError) {
    return (
      <div className="container-fluid">
        <h6>Error de Búsqueda</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container-fluid">
        <h6>Loading…</h6>
      </div>
    );
  }

  return (
    <>
      {news.map((report, i) => (
        <div className="col-sm-12 col-md-4 mb-4" key={i}>
          <div className="card mt-4 h-100 mx-auto " style={{ width: '18rem' }}>
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
    </>
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
