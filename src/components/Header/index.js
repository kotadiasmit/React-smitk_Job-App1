import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
      </Link>
      <div className="nav-content">
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </ul>
      </div>
      <div className="logout-desktop-btn">
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <AiFillHome color="#ffffff" size={40} />
            </li>
          </Link>
          <Link to="/jobs">
            <li className="nav-menu-item-mobile">
              <BsFillBriefcaseFill color="#ffffff" size={40} />
            </li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <FiLogOut color="#ffffff" size={40} />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
