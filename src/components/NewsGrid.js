import React from 'react';
import { connect } from 'react-redux';
import { getNewsByCategory, getNewsByDate, clearNews } from '../actions';
import Card from './Card';

const NewsGrid = ({ id, getNewsByCategory, getNewsByDate  }) => {
  console.log('entro newsGrid', id);
  if (id) {
    getNewsByCategory(id);
  } else {
    getNewsByDate();
  }
  // obtener endpoint del home y debo hacerlo

  return (
    <div className="container">
      <div className="card-deck">
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsByCategory: (id) => dispatch(getNewsByCategory(id)),
  getNewsByDate: () => dispatch(getNewsByDate()),
  onClear: () => dispatch(clearNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsGrid);
