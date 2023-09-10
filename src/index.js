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
    searchItems: [],
    doneItems: [],
    importantItems: [],
    
    isSearched: false,
    isImportantClicked: false,
    isDoneClicked: false,
    isAllClicked: false,
  }


  handleAll = () => {
    this.setState(()=>{
      return{
        isDoneClicked: false,
        isImportantClicked: false,
      }
    })
  }

  onImportant = (id) => {
    this.setState(({ items } )=>{
      const idx = items.findIndex((el)=>el.id===id)
     items[idx].important =  items[idx].done ? null: !items[idx].important
    })
  }

  handleImportant = () => {
    const items3= this.state.items.filter((element) => element.important===true)
    console.log(items3);
    this.setState(()=>{
      return {
        importantItems: items3,
        isImportantClicked: true,
        isAllClicked: false,
        isDoneClicked: false,
      }
    })
  }

  onDone = (id) => {
    this.setState(({ items } )=>{
      const idx = items.findIndex((el)=>el.id===id);
      items[idx].done = !items[idx].done;
      items[idx].important  = false
    })
  }

  handleDone = () => {
    const items2= this.state.items.filter((element) => element.done===true)
    this.setState(()=>{
      return {
        doneItems: items2,
        isDoneClicked: true,
        isImportantClicked: false,
        isAllClicked: false,
      }
    })
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
    const {isSearched, searchItems, items, isImportantClicked, importantItems, isDoneClicked, doneItems} = this.state

    return (
  
      <div className="app">
        <Header done={8} important={23} />
        <Search 
        handleSearch={this.handleSearch} 
        handleDone={this.handleDone} 
        handleImportant={this.handleImportant}
        handleAll={this.handleAll}
        />
        <TodoList 
        items={isSearched ? searchItems : (isImportantClicked ? importantItems: (isDoneClicked ?  doneItems : items))} 
        deleteItem={this.deleteItem} 
        onImportant={this.onImportant}
        onDone={this.onDone}
        />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
