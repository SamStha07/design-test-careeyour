import React from 'react';
import './sidebar.style.scss';
import { ImCross } from 'react-icons/im';

const Sidebar = ({ handleToggle }) => {
  return (
    <div className='sidebar'>
      <ul>
        <li>browse jobs</li>
        <li>career advice</li>
        <li>post a job</li>
      </ul>
      <div className='sidebar__cross-icon' onClick={() => handleToggle(false)}>
        <ImCross />
      </div>
    </div>
  );
};

export default Sidebar;
