import { SET_INPUT } from './inputTypes'

export const setInput = (userInput) => {
    return {
        type: SET_INPUT,
        input: userInput,
    }
}
