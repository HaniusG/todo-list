import TodoListItem from "./TodoListItem";
const TodoList = () => {
    const items = [
        { text: "Learm JS", important: true },
        { text: "Drink Coffee", important: false},
        { text: "Learm React", important: false },
        { text: "Typescript", important: true },
    ]

    return (
      <ul >
        <TodoListItem text={items[0].text} important={items[0].important}/>
        <TodoListItem text={items[1].text} important={items[1].important}/>
        <TodoListItem text={items[2].text} important={items[2].important}/>
        <TodoListItem text={items[3].text} important={items[3].important}/>
      </ul>
    );

}

export default TodoList;