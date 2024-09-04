import React, { FC, ReactNode } from 'react'
import { Button } from './ui/button'

interface googleProps {
    children: ReactNode
}

const GooglerSignInButton: FC<googleProps> = ( {children} ) => {
  return (
    <Button className='w-full mb-2 flex justify-evenly items-center'>
        <img src='/google.png' alt='google icon' width={20} height={20} />
        { children }
    </Button>
  )
}

export default GooglerSignInButton