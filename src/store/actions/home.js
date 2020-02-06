import Axios from 'axios'
import { LOADING_PRODUCT, SUCCESS_PRODUCT, ERROR_PRODUCT } from '../constant'

export const getProducts = (products) => {
  return (dispatch) => {
    dispatch({
      type: LOADING_PRODUCT
    })
    
    Axios.get('http://www.mocky.io/v2/5c9105cb330000112b649af8')
      .then(response => {
        dispatch({
          type: SUCCESS_PRODUCT,
          data: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR_PRODUCT,
          data: []
        })
      })
  }
}

