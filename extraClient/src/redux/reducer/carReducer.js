import { GET_EXTRA_CAR } from '../action/types'

const initialState = {
  car: {},
}

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXTRA_CAR:
      return {
        ...state,
        car: payload,
      }
    default:
      return state
  }
}

export default carReducer
