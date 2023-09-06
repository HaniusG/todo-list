import { Component } from 'react';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare } from 'react-icons/fa6';

import './todo-list-item.css';

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: this.props.important,
    isEditing: false,
    text: this.props.text,
  }

  onEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
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
    const { text } = this.props;
    const { isDone, isImportant } = this.state;

    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? 'red': 'black'),
      fontWeight: isDone ? "normal": (isImportant ? "bold" : "normal"),
      display: this.state.isEditing ? "none":  "block"
    }
  
    return (
      <li className='list-item'>
        <input type="text" value={this.state.text} className='edit-input' onChange ={this.onInputChange} style={this.state.isEditing ? {display: "block"}: {display: "none"}}/>
        <span className='item-text' style={textStyle} onClick={ this.onDone } >
          {this.state.text}
        </span>
  
        <span className='item-btns'>
          <button className='item-btn-edit' onClick={this.onEdit}> <FaPenToSquare/></button>
          <button className='item-btn-done' onClick={ this.onDone }><FaCheck /></button>
          <button className='item-btn-important' onClick={ this.onImportant }><FaInfo /></button>
          <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
        </span>
      </li>
    );
  }
}
  
export default TodoListItem;