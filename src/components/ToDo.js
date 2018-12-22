import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import { addTitle, removeTitle, getTitles } from '../store/toDo'

class ToDo extends React.Component {
  state = {
    formText: '',
  }

  handleUpdateText = (e) => {
    const { value } = e.target
    this.setState({ formText: value })
  }

  handleAddTitle = () => {
    const { formText } = this.state
    if (!formText) {
      return
    }
    this.props.addTitleAction(formText)
    this.setState({ formText: '' })
  }

  handleRemoveTitle = (e) => {
    const { innerText } = e.target
    this.props.removeTitleAction(innerText)
  }

  render() {
    const { titles } = this.props
    return (
      <div>
        <label>{ titles.length > 0 ? titles.map(el => el + ' | ') : 'Без названия' }</label>
        <div>
          <input
            value={ this.state.formText }
            placeholder="Название задачи"
            onChange={ this.handleUpdateText }
          />
          <button onClick={ this.handleAddTitle }>Добавить</button>
          <ul>
            { titles.map((el, idx) => <li onClick={ this.handleRemoveTitle } key={ idx }>{ el }</li>) }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  titles: getTitles(state),
})

const mapDispatchToProps = dispatch => ({
  addTitleAction: bindActionCreators(addTitle, dispatch),
  removeTitleAction: bindActionCreators(removeTitle, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
