import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from '../components';

const TestContainer = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default TestContainer