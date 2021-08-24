import { SET_TOTAL } from './totalTypes'

export const setTotal = (value) => {
    return {
        type: SET_TOTAL,
        totalValue: value,
    }
}
