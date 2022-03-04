import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../pages/homepage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default MainRoutes;
