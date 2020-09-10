import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsByCategory, getNewsByDate } from '../actions';
import Card from './Card';

class NewsGrid extends Component {
  componentDidMount() {
    this.props.getNewsByDate();
  }

  componentDidUpdate() {
    if (this.props.id) {
      this.props.getNewsByCategory(this.props.id);
    } else {
      this.props.getNewsByDate();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card-deck justify-content-center">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getNewsByCategory: (id) => dispatch(getNewsByCategory(id)),
  getNewsByDate: () => dispatch(getNewsByDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsGrid);
