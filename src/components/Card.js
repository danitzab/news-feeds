import React from 'react';

export const Card = ({ img_url, title, category, url }) => {
  return (
    <div className="col-sm-12 col-md-4 mb-4">
      <div className="card mt-4 h-100 mx-auto" style={{ width: '18rem' }}>
        {img_url ? (
          <img src={img_url} className="card-img-top" alt={title} />
        ) : (
          <img src="https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif" className="card-img-top" alt="img-not-found" />
        )}

        <div className="card-body text-right">
          <p className="card-text text-center">{title}</p>
          <h5 className="card-title text-center">{category}</h5>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-right">
            Ver Más
          </a>
        </div>
      </div>
    </div>
  );
};
