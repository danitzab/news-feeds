import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsByCategory, getNewsByDate } from '../actions';
import NewsGrid from './NewsGrid';

class News extends Component {
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
      <div>
        <NewsGrid />
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
