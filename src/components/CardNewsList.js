import React from 'react';

const CardNewsList = ({ img_url, title, category, url }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            {img_url ? (
              <img className="card-img-top" src={img_url} alt={title} />
            ) : (
              <img
                src="https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif"
                className="card-img-top"
                alt="img-not-found"
              />
            )}
          </div>
          <div className="col-8">
            <p className="card-title justify-content-center">{title}</p>
            <h5 className="card-text">{category}</h5>
            <br />
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardNewsList;
