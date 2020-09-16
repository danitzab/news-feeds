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
        <NewsGrid id={this.props.id} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNewsByCategory: (id) => dispatch(getNewsByCategory(id)),
  getNewsByDate: () => dispatch(getNewsByDate()),
});

export default connect(null, mapDispatchToProps)(News);
