import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to="/" className="header-btn"><span>CodePlate</span> <span className="version">V.0.1</span></NavLink>
      <NavLink to="/about" activeClassName='selected' className='about'>About</NavLink>
    </nav>
  )
}

export default Header