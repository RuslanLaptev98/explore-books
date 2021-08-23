import { SET_ORDER } from './orderTypes'

export const setOrder = (order) => {
    return {
        type: SET_ORDER,
        order: order,
    }
}
