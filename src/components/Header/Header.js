import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1>My Todo List</h1>
      <span>Done: 0</span>
      <br />
      <span>Important: 2</span>
    </div>
  );
}

export default Header;