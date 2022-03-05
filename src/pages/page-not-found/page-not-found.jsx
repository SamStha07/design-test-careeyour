import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  // if page not found will redirect  to'/user/profile
  useEffect(() => {
    navigate('/user/profile');
  }, []);

  return (
    <div>
      <h2>PageNotFound</h2>
    </div>
  );
};

export default PageNotFound;
