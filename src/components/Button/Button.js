import "./button.css"
const Button = ({text, color = "", classBt}) => {
    return(
        <button className={`toDoButton ${classBt}`} style={{ color }}>{text}</button>
    )
}

export default Button;