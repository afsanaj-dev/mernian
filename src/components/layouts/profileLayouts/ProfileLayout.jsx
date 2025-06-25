import React from 'react'
import { Outlet } from 'react-router-dom';
import CommonLayout from '../commonLayouts/CommonLayout';
import LeftSideBar from '../commonLayouts/LeftSideBar';
import ProfileCover from '../commonLayouts/ProfileCover';

const ProfileLayout = () => {
  return (
    <CommonLayout left={<LeftSideBar />} cover={<ProfileCover />}>
      <Outlet />
    </CommonLayout>
  );
}

export default ProfileLayout