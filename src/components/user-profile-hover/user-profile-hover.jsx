import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Divider } from '../../common';
import { ProfileData } from '../../data';
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
        {ProfileData.map((link) => (
          <Link to={`${link.link}`} key={link.id}>
            <div
              className='user-profile-hover__links--item'
              onClick={() => handleClose(false)}
            >
              {link.icon}
              <span>{link.title}</span>
            </div>
          </Link>
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
