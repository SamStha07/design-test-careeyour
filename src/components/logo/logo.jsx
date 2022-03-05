import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logo.style.scss';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className='logo' onClick={() => navigate('/user/profile')}>
      <h3>careeyour</h3>
    </div>
  );
};

export default Logo;
