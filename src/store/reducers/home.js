import { GET_LATEST_HOME } from '../../actions/home';

const initialState = {
  home: []
}

export const Home = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_HOME:
      const latestHome = action.payload.home
      return { ...state, home: latestHome }

    default:
      return state
  }
}