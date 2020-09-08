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
  console.log('enter word', word);
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/search/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => {
        dispatch(loadingSuccess(news.slice(0, 10)));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getNewsByCategory = (category) => {
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((category) => {
        dispatch(loadingSuccess(category.slice(0, 10)));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getNewsByDate = () => {
  return (dispatch) => {
    dispatch(clearNews());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    let tzoffset = new Date().getTimezoneOffset() * 60000;
    let localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1);

    fetch(`https://api.canillitapp.com/latest/${localISOTime.slice(0, 10)}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadingSuccess(data.slice(0, 10)));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};
