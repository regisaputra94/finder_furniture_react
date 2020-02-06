export const GET_LATEST_HOME = 'GET_LATEST_HOME' 

export const getLatestHome = (home) => {
  return (dispatch) => {
    dispatch({
      type: GET_LATEST_HOME,
      payload: {
        home: home,
      }
    })
  }
}