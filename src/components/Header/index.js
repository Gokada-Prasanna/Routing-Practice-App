// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <h1 className="heading-header">Wave</h1>
    </div>
    <ul className="list-container">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>

      <li>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
