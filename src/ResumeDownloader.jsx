import React from 'react'
import { Button } from './components/ui/button'
import { FileText } from 'lucide-react'

export const ResumeDownloader = () => {
  return (
    <div className='fixed z-50 bottom-30 right-10'>
        <Button className='bg-orange-500 text-white hover:bg-orange-500 cursor-pointer'>Resume <FileText className='inline'/></Button>
    </div>
  )
}
