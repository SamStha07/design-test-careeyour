import React, { useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MenuDropdown from '../../common/MenuDropdown';
import { useToggle } from '../../hooks';
import { UserProfileHover } from '../user-profile-hover';
import './user-profile.style.scss';

const UserProfile = () => {
  const { show, handleToggle } = useToggle(false);
  const anchorRef = useRef(null);

  return (
    <div className='user-profile'>
      <div
        className={`user-profile__icons ${show ? 'active' : ''}`}
        onClick={() => handleToggle(!show)}
        ref={anchorRef}
      >
        <FaUserAlt />
        <MdOutlineKeyboardArrowDown />
      </div>

      <MenuDropdown
        profile='true'
        open={show}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
      >
        <UserProfileHover handleClose={handleToggle} />
      </MenuDropdown>
    </div>
  );
};

export default UserProfile;
