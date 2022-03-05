import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divider } from '../../common';
import ProfileData from '../../data/profile-data';
import './tabs.style.scss';

const Tabs = () => {
  const location = useLocation();

  return (
    <div className='tabs'>
      <h4>My account</h4>
      <Divider />
      <ul>
        {ProfileData.map((tab) => (
          <React.Fragment key={tab.id}>
            <Link to={tab.link}>
              <li className={`${tab.link === location.pathname && 'active'}`}>
                {tab.icon} <span>{tab.title}</span>
              </li>
            </Link>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
