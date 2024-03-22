import React from 'react'
import Topheader from './Topheader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div>

        <Topheader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout