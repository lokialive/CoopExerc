import { GET_EXTRA_CAR } from './types'

export const get_extra_car = (car) => {
  return {
    type: GET_EXTRA_CAR,
    payload: car,
  }
}
