import React from 'react'
import Navbar from './Navbar';
import RightSidebar from './RightSidebar';

const CommonLayout = ({left,cover,children}) => {
  return (
      <div>
          <Navbar/>
          <div className='flex'>
              <div className='w-[20%] h-screen bg-amber-100'>
                  {left}
              </div>
              <div className='w-[75%] bg-blue-300'>
                  {cover}
                  <div>
                      {children}
                  </div>
              </div>
              <div className='w-[5%] h-screen'><RightSidebar/></div>
      </div>
    </div>
  );
}

export default CommonLayout