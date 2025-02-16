import React from 'react'
import { About } from './dashComp/About'
import { Projects } from './dashComp/Projects'

export const Dashboard = () => {
  return (
    <div id='dashboard' className='w-full p-4 overflow-auto'>
        <About/>
        <Projects/>
    </div>
  )
}
