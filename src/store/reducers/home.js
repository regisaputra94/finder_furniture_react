import { LOADING_PRODUCT, SUCCESS_PRODUCT, ERROR_PRODUCT } from '../constant';

const initialState = {
  products: [],
  furniture_styles: [],
  loading: false,
  error: false,
}

export const Home = (state = {...initialState}, action) => {
  switch (action.type) {
    case LOADING_PRODUCT:      
      return { ...state, loading: true }

    case SUCCESS_PRODUCT:
      console.log('action ==>', action.data)
      return { ...state, loading: false, products: action.data.products, furniture_styles: action.data.furniture_styles }

    case ERROR_PRODUCT:
      return { ...state, loading: false, error:true }

    default:
      return state
  }
}