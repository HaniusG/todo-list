import './header.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>My Todo List</h1>
        <div><span>Done: 0</span>
          <br />
          <span>Important: 2</span></div>
      </div>
    )
  }
}

// const Header = () => {
//   return (
//     <div className='header'>
//       <h1>My Todo List</h1>
//       <div><span>Done: 0</span>
//         <br />
//         <span>Important: 2</span></div>
//     </div>
//   );
// }

export default Header;