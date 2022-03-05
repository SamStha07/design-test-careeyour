import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Tabs } from '../../components';
import './homepage.style.scss';

const Homepage = () => {
  const navigate = useNavigate();

  // will redirect this route from '/user to '/user/profile
  useEffect(() => {
    navigate('/user/profile');
  }, []);

  return (
    <div className='homepage'>
      <Tabs />
      <Outlet />
    </div>
  );
};

export default Homepage;
