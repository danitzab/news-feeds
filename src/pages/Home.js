import React from 'react';
import NewsGrid from '../components/NewsGrid';

export const Home = ({ match }) => {
  return (
    <div className="container">
      <NewsGrid id={match.params.id} />
      <br />
      <br />
    </div>
  );
};
