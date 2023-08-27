import TodoListItem from "./TodoListItem";
const TodoList = () => {
    const items = [
        { text: "Learm JS", important: true },
        { text: "Drink Coffee", important: false},
        { text: "Learm React", important: false },
        { text: "Typescript", important: true },
        { text: "Learn Node Js", important: false },

    ];

    const data = items.map(({text, important})=> {
     return (<TodoListItem text={text} important={important}/>)
    })

    return (
      <ul >
        {data}
      </ul>
    );

}

export default TodoList;