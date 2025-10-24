import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Tent } from 'lucide-react'

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
       <Tent className='h-6 w-6'/>
      </Link>
    </Button>
  )
}

export default Logo