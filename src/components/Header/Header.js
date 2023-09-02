import './header.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    const {done, important} = this.props;

    return (
      <div className='header'>
        <h1>My Todo List</h1>
        <div><span>Done: {done}</span>
          <br />
          <span>Important: {important}</span></div>
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