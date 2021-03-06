import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsBySearch, clearNews, getNewsByDate } from '../actions';

class SearchHeader extends Component {
  state = { input: '' };

  inputSearch;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onGet(this.inputSearch.value);
  };

  handleInput = (e) => {
    e.persist();
    this.setState({
      input: e.target.value,
    });
  };

  handleCleaner = () => {
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group has-search">
          <div className="input-group ">
            <input
              type="search"
              className="form-control mr-sm-2"
              onChange={this.handleInput}
              pattern="[A-Za-z0-9]{1,15}"
              placeholder="Buscar"
              aria-label="Search"
              value={input}
              ref={(input) => (this.inputSearch = input)}

              // defaultValue={defaultUser}
            />
            <div className="input-group-append">
              {input && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => {
                    this.handleCleaner();
                    this.props.onClear();
                    this.props.getNewsByDate();
                  }}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-x"
                    fillRule="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              )}
              <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit} disabled={!input}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-search"
                  fillRule="currentColor"
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

// const mapStateToProps = (state, ownProps) => ({
//   defaultUser: ownProps.user,
// });

const mapDispatchToProps = (dispatch) => ({
  onGet: (input) => dispatch(getNewsBySearch(input)),
  onClear: () => dispatch(clearNews()),
  getNewsByDate: () => dispatch(getNewsByDate()),
});

export default connect(null, mapDispatchToProps)(SearchHeader);
