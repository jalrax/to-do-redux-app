import { ADD_TITLE, REMOVE_TITLE } from './actions'

export const addTitle = title => ({
  type: ADD_TITLE,
  title,
})

export const removeTitle = title => ({
  type: REMOVE_TITLE,
  title,
})
