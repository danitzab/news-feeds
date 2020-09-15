import React from 'react';
import News from '../components/News';

export const Home = ({ match }) => {
  return (
    <div className="container">
      <News id={match.params.id} />
      <br />
      <br />
    </div>
  );
};
