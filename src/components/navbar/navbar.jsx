import { GiHamburgerMenu } from 'react-icons/gi';
import Chaticon from '../chaticon';
import Logo from '../logo';
import NotificationIcon from '../notification-icon';
import UserProfile from '../user-profile';
import './navbar.style.scss';

const Navbar = ({ handleToggle, isTablet }) => {
  return (
    <nav className='nav'>
      <div className='nav__left'>
        <ul className='nav__left--list'>
          {isTablet && (
            <div
              className='nav__left--hamburgerMenu'
              onClick={() => handleToggle(true)}
            >
              <GiHamburgerMenu />
            </div>
          )}
          <Logo />
          {!isTablet && (
            <>
              <li>browse jobs</li>
              <li>career advice</li>
            </>
          )}
        </ul>
      </div>
      <div className='nav__right'>
        <ul className='nav__right--list'>
          <Chaticon />
          <NotificationIcon />
          <UserProfile />
          {!isTablet && <li>post a job</li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
