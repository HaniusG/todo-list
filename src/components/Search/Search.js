import { Component } from 'react';

import './search.css';

export default class Search extends Component {





  render() {
    const {handleSearch, handleDone, handleImportant} = this.props;
    
    return (
      <div className='search' >
        <input type="text" placeholder="Type text for search..." onChange={handleSearch} />
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done' onClick={handleDone}>Done</button>
        <button className='search-btn-important' onClick={handleImportant}>Important</button>
      </div>
    );
  }
}