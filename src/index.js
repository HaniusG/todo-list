import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css";

class App extends Component {

  state = {
    items: [
      { text: "Learn JS", important: true, done: false, id: 1 },
      { text: "Drink Coffee", important: false, done: false, id: 2 },
      { text: "Learn React", important: false, done: false, id: 3 },
      { text: "Learn TypeScript", important: true, done: false, id: 4 },
      { text: "Learn Node.js", important: false, done: false, id: 5 },
    ],
    isSearched: false,
    searchItems: [],
    doneItems: [],
    importantItems: []
  }
  onImportant = () => {
    this.setState()

  }

  handleSearch = (e) => {
    const items1 = this.state.items.filter((element) => element.text.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState(() => {
      return {
        isSearched: true,
        searchItems: items1
      }
    })
  }

  handleDone = () => {
    const items2= this.state.items.filter((element) => element.style.color="#FF0000")
    console.log(items2);
  }

  handleImportant = () => {
    const items3= this.state.items.filter((element) => element.important===true)
    console.log(items3);
  }



  deleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)

      return {
        items: [
          ...items.slice(0, idx),
          ...items.slice(idx + 1)
        ]
      }

    })


  }

  onAddItem = (text) => {
    const id = this.state.items.length ? this.state.items[this.state.items.length - 1].id + 1 : 1;

    const newItem = {
      text,
      important: false,
      id: id
    };

    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem]
      }
    })
  }
 
  render() {

    return (
  
      <div className="app">
        <Header done={8} important={23} />
        <Search handleSearch={this.handleSearch} handleDone={this.handleDone} handleImportant={this.handleImportant}/>
        <TodoList items={this.state.isSearched ? this.state.searchItems : this.state.items} deleteItem={this.deleteItem} />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
