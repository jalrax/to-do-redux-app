import reducer from './reducer'
import * as ActionCreators from './actionCreators'
import * as Selectors from './selectors'

export const { addTitle, removeTitle } = ActionCreators
export const { getTitles } = Selectors
export default reducer
