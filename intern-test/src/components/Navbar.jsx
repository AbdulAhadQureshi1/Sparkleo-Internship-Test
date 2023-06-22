import img from '../assets/Logo.png'
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={img} alt="logo" />
      <h1>Employee Management</h1>
      <span className='hamburger'>Menu</span>
    </nav>
  );
}
