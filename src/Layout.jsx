import React from 'react'
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
   <>
   <Header />
    <Outlet />
    <Footer />
   </>
  )
}

export default Layout
