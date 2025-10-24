import React from 'react'
import { SignOutButton } from '@clerk/nextjs';


import { useToast } from '../ui/use-toast'
import { Button } from '../ui/button';

const SignOutLink = () => {

  const {toast} = useToast()

  const handleLogout = () => {
     toast({ description: 'You have been signed out.'})
  }
  
  return (
     <SignOutButton>
       <Button className='w-full text-left' onClick={handleLogout}>
        Logout
       </Button>
     </SignOutButton>
  )
}

export default SignOutLink