import Button from "../../Button/Button";
import "./todo-list-item.css"
const TodoListItem = ({ text, important }) => {
    const style = {
        color: important ? "red" : "black"
    }
    return (
        <div className="listItemDiv">
            <li style={style}>{text}</li>
            <div className="buttonsDiv">
                <Button text="Imp" classBt="impButton" />
                <Button text="Edit" classBt="editButton" />
                <Button text="Dlt" classBt="dltButton" />
            </div>
        </div>

    );
}

export default TodoListItem;