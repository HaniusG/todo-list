import { Component } from 'react';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaCircleCheck } from 'react-icons/fa6';
import { validateInput, createError } from '../../../utils/validator';
import './todo-list-item.css';

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isEditing: false,
    text: this.props.text,
    isError: false,
  }

  onEdit = () => {
    this.setState(({ isEditing, text}) => {
      if (isEditing && !validateInput(text)) {

        return {
          isError: true
        }
      }
      return {
        isEditing: !isEditing,
        isError: false
      }
    })
  }

  onInputChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onDone = () => {
    this.setState({
      isDone: !this.state.isDone
    });
  }

  onDelete = () => {
    this.props.deleteItem(this.props.id)
  }

  onImportant = () => {
    this.setState({
      isImportant: !this.state.isImportant
    });
  }

  render() {
    const { isDone, isImportant, isEditing, text, isError } = this.state;

    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? 'red' : 'black'),
      fontWeight: isDone ? "normal" : (isImportant ? "bold" : "normal"),
    }

    const inputStyle = {
      borderColor: isError ? "red": "#ccc"
    }



    return (
      <li className='list-item'>

        {
          isEditing ? (
            <div className='item-input-wrapper'>
              <input type="text" value={text} className='edit-input' onChange={this.onInputChange} style={inputStyle}/>
              {
                isError ? <span className='input-error-message'>Input text required</span> : null
              }
            </div>
            

          ) : (
            <span className='item-text' style={textStyle} onClick={this.onDone} >
              {text}
            </span>

          )

        }



        <span className='item-btns'>
          <button className='item-btn-edit' onClick={this.onEdit}> {isEditing ? <FaCircleCheck /> : <FaPenToSquare />}</button>
          <button className='item-btn-done' onClick={this.onDone}><FaCheck /></button>
          <button className='item-btn-important' onClick={this.onImportant}><FaInfo /></button>
          <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
        </span>
      </li>
    );
  }
}

export default TodoListItem;