import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  EmailContent,
  JobsContent,
  ProfileContent,
  ResumeContent,
  SettingsContent,
} from '../components/tabs-content';
import { Homepage, PageNotFound } from '../pages';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/user' element={<Homepage />}>
        <Route path='profile' element={<ProfileContent />} />
        <Route path='my-resume' element={<ResumeContent />} />
        <Route path='my-jobs' element={<JobsContent />} />
        <Route path='email' element={<EmailContent />} />
        <Route path='settings' element={<SettingsContent />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
