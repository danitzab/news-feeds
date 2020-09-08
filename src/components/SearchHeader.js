import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsBySearch } from '../actions';

class SearchHeader extends Component {
  inputSearch;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onGet(this.inputSearch.value);
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group has-search">
          <div className="input-group ">
            <input
              type="search"
              className="form-control mr-sm-2"
              placeholder="Buscar"
              aria-label="Search"
              // defaultValue={defaultUser}
              ref={(input) => (this.inputSearch = input)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-search"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getNewsBySearch(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);