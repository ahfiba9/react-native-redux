interface Params {
  type: string
  payload: {
    // add later
  }
}
const ADD_COUNTER = 'ADD_COUNTER'
const MINUS_COUNTER = 'MINUS_COUNTER'
const RESET_COUNTER = 'RESET_COUNTER'

// actions
export const addCounter = () => {
  return { type: ADD_COUNTER }
}

export const minusCounter = () => {
  return { type: MINUS_COUNTER }
}

export const resetCounter = () => {
  return { type: RESET_COUNTER }
}

export interface Counter {
  counter: number
}

// reducer
const initialState: Counter = {
  counter: 0
}

export const counterStates = (state = initialState, action: Params) => {
  const { type, payload } = action
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
      case MINUS_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    case RESET_COUNTER:
      return {
        ...state,
        counter: initialState.counter
      }
    default:
      return state
  }
}
