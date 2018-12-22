import update from 'immutability-helper'
import { ADD_TITLE, REMOVE_TITLE } from './actions'

const defaultState = {
  titles: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TITLE: {
      return update(state, {
        titles: { $push: [action.title] },
      })
    }
    case REMOVE_TITLE: {
      const index = state.titles.findIndex(el => el === action.title)
      return update(state, {
        titles: { $splice: [[index, 1]] },
      })
    }
    default:
      return state
  }
}
