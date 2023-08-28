import TodoListItem from "./TodoListItem/TodoListItem";
import "./todo-list.css"
const TodoList = () => {
  const items = [
    { text: "Learm JS", important: true, id: 1 },
    { text: "Drink Coffee", important: false, id: 2 },
    { text: "Learm React", important: false, id: 3 },
    { text: "Typescript", important: true, id: 4 },
    { text: "Learn Node Js", important: false, id: 5 },

  ];

  const data = items.map(({ text, important, id }) => {
    return (<TodoListItem text={text} important={important} key={id} />)
  })

  return (
    <ul className="todoList">{data}</ul>
  );

}

export default TodoList;