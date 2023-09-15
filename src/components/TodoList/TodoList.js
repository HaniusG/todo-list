import { Component } from "react";

import TodoListItem from "./TodoListItem";
import "./todo-list.css";

class TodoList extends Component {

  render() {
    const { items, deletItem, onDoneOrImp} = this.props;

    const data = items.map(({ text, important, done, id }) => {
      return (
        <TodoListItem
          text={text}
          important={important}
          key={id}
          id={id}
          deletItem={deletItem}
          onDoneOrImp={onDoneOrImp}
          
          done={done}
        />
      );
    });
  
    return (
      <ul className="todolist">{data}</ul>
    );
  }
}

export default TodoList;
