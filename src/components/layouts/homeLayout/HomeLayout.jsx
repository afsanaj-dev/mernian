import React from 'react'
import HomeSidebar from './HomeSidebar';
import ProfileCover from '../commonLayouts/ProfileCover';
import CommonLayout from '../commonLayouts/CommonLayout';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <CommonLayout left={<HomeSidebar />} cover={<ProfileCover/>}>
      <Outlet />
    </CommonLayout>
  );
}

export default HomeLayout