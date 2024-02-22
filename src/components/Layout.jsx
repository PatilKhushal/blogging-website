import React from 'react'
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='flex flex-col h-dvh'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout
