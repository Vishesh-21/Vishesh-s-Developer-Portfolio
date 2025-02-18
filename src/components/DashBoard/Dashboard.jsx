import React from 'react'
import { About } from './dashComp/About'
import { Projects } from './dashComp/Projects'
import { Skills } from './dashComp/Skills'
import { Contact } from './dashComp/Contact'

export const Dashboard = () => {
  return (
    <div id='dashboard' className='w-full py-4'>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  )
}
