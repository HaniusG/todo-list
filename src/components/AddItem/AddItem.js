import Button from "../Button/Button"
import './add-item.css'
const AddItem = () => {
    return (
        <div className="addDiv">
            <input type="text" placeholder="Wrigth new element here"></input>
            <Button text={"Add"} classBt="addButton"/>
        </div>
    )
}

export default AddItem;