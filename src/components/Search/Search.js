import Button from "../Button/Button";
import "./search.css"
const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Type text for search"></input>
            <Button text={"Search"} />
        </div>

    )
}

export default Search;