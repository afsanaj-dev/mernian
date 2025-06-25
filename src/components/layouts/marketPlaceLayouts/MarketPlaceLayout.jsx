import React from 'react'
import CommonLayout from '../commonLayouts/CommonLayout';
import LeftSideBar from '../commonLayouts/LeftSideBar';
import MarketPlaceCover from './MarketPlaceCover';
import { Outlet } from 'react-router-dom';

const MarketPlaceLayout = () => {
  return (
    <CommonLayout left={<LeftSideBar />} cover={<MarketPlaceCover />}>
      <Outlet />
    </CommonLayout>
  );
}

export default MarketPlaceLayout