import React from 'react';
import { Avatar } from '../../common/avatar';
import { Divider } from '../../common/divider';
import userInfoLinks from './profile-hover-data';
import './user-profile-hover.style.scss';

const UserProfileHover = ({ handleClose }) => {
  return (
    <div className='user-profile-hover'>
      <div className='user-profile-hover__userInfo'>
        <Avatar size='md' />
        <div className='user-profile-hover__userInfo--info'>
          <p>Aabid Hasan</p>
          <span>hello@aabidpro.com</span>
        </div>
      </div>
      <Divider />
      <div className='user-profile-hover__links'>
        {userInfoLinks.map((link) => (
          <div
            className='user-profile-hover__links--item'
            onClick={() => handleClose(false)}
            key={link.id}
          >
            {link.icon}
            <span>{link.title}</span>
          </div>
        ))}
      </div>
      <Divider />

      <div
        className='user-profile-hover__signout'
        onClick={() => handleClose(false)}
      >
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default UserProfileHover;
