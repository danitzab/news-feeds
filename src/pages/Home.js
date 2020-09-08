import React from 'react';
import NewsGrid from '../components/NewsGrid';

export const Home = ({ match }) => {
  console.log(match.params.id);
  var todayDate = new Date().toISOString().slice(0, 10);
  console.log('todayDate', todayDate);
  return (
    <div className="container">
      <NewsGrid id={match.params.id} />
      <br />
      <br />
    </div>
  );
};
