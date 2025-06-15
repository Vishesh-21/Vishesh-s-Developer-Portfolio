import React from 'react'
import { Button } from './components/ui/button'
import { FileText } from 'lucide-react'

export const ResumeDownloader = () => {
  return (
    <div className='fixed z-50 md:bottom-20 bottom-15  right-10'>
        <a href="../public/vishu_resume.pdf" target='_blank'>
        <Button className='bg-orange-500 text-white hover:bg-orange-500 cursor-pointer'>Resume <FileText className='inline'/></Button>
        </a>
    </div>
  )
}
