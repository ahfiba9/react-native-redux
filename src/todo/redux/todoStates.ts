interface Params {
  type: string
  payload: {
    id: number
    todo: string
  }
}
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

// actions
export const addTodo = (payload: {
  todo: string
}) => {
  return { type: ADD_TODO, payload }
}

export const deleteTodo = (payload: {
  id: number
}) => {
  return { type: DELETE_TODO, payload }
}

export interface TodoList {
  id: number
  title: string
}

export interface Todo {
  todo: TodoList[]
}

// reducer
const initialState: Todo = {
  todo: []
}

export const todoStates = (state = initialState, action: Params) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, {id: state.todo.length + 1, title: payload.todo}]
      }
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(item => item.id !== payload.id)
      }
    default:
      return state
  }
}
