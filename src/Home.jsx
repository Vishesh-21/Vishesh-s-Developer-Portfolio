import React from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Dashboard } from './components/DashBoard/Dashboard'

export const Home = () => {
  return (
    <div className='w-full h-screen mt-28 flex gap-8 px-[100px] mb-4'>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}
