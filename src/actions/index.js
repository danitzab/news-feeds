export const loadingError = (bool) => ({
  type: 'LOADING_ERROR',
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: 'LOADING_IN_PROGRESS',
  isLoading: bool,
});

export const loadingSuccess = (news) => ({
  type: 'LOADING_SUCCESS',
  news,
});

export const clearNews = () => ({
  type: 'CLEAR_NEWS',
});

export const getNewsBySearch = (word) => {
  return (dispatch) => {
    initDispatch(dispatch);

    dispatchService(dispatch, `https://api.canillitapp.com/search/${word}`);
  };
};

export const getNewsByCategory = (category) => {
  return (dispatch) => {
    initDispatch(dispatch);

    dispatchService(dispatch, `https://api.canillitapp.com/news/category/${category}`);
  };
};

export const getNewsByDate = () => {
  return (dispatch) => {
    initDispatch(dispatch);
    let tzoffset = new Date().getTimezoneOffset() * 60000;
    let localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1);

    dispatchService(dispatch, `https://api.canillitapp.com/latest/${localISOTime.slice(0, 10)}`);
  };
};

const initDispatch = (dispatch) => {
  dispatch(clearNews());

  dispatch(loadingError(false));

  dispatch(loadingInProgress(true));
};

const dispatchService = (dispatch, endpoint) => {
  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(loadingInProgress(false));

      return response;
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data || !data.length) {
        throw Error(data.statusText);
      } else {
        dispatch(loadingSuccess(data.slice(0, 10)));
      }
    })
    .catch(() => dispatch(loadingError(true)));
};
